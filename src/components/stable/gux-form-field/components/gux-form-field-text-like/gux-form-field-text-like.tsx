import {
  Component,
  Element,
  forceUpdate,
  h,
  JSX,
  Method,
  Prop,
  State
} from '@stencil/core';

import { calculateInputDisabledState } from '../../../../../utils/dom/calculate-input-disabled-state';
import { onInputDisabledStateChange } from '../../../../../utils/dom/on-input-disabled-state-change';
import { OnMutation } from '../../../../../utils/decorator/on-mutation';
import { onRequiredChange } from '../../../../../utils/dom/on-attribute-change';
import { preventBrowserValidationStyling } from '../../../../../utils/dom/prevent-browser-validation-styling';
import { trackComponent } from '../../../../../usage-tracking';

import { GuxFormFieldContainer } from '../../functional-components/gux-form-field-container/gux-form-field-container';
import { GuxFormFieldError } from '../../functional-components/gux-form-field-error/gux-form-field-error';
import { GuxFormFieldLabel } from '../../functional-components/gux-form-field-label/gux-form-field-label';

import { GuxFormFieldLabelPosition } from '../../gux-form-field.types';
import {
  clearInput,
  hasErrorSlot,
  hasContent,
  getComputedLabelPosition,
  validateFormIds,
  setSlotAriaDescribedby
} from '../../gux-form-field.service';

/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot prefix - Optional slot for prefix
 * @slot suffix - Optional slot for suffix
 * @slot error - Optional slot for error message
 */
@Component({
  styleUrl: 'gux-form-field-text-like.less',
  tag: 'gux-form-field-text-like',
  shadow: true
})
export class GuxFormFieldTextLike {
  private input: HTMLInputElement;
  private label: HTMLLabelElement;
  private disabledObserver: MutationObserver;
  private requiredObserver: MutationObserver;

  @Element()
  private root: HTMLElement;

  @Prop()
  clearable: boolean;

  @Prop()
  labelPosition: GuxFormFieldLabelPosition;

  @State()
  private hasPrefix: boolean;

  @State()
  private hasSuffix: boolean;

  @State()
  private computedLabelPosition: GuxFormFieldLabelPosition = 'above';

  @State()
  private disabled: boolean;

  @State()
  private required: boolean;

  @State()
  private hasContent: boolean = false;

  @State()
  private hasError: boolean = false;

  @OnMutation({ childList: true, subtree: true })
  onMutation(): void {
    this.hasError = hasErrorSlot(this.root);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  @Method()
  async guxForceUpdate(): Promise<void> {
    this.hasContent = hasContent(this.input);
    this.hasError = hasErrorSlot(this.root);

    forceUpdate(this.root);
  }

  componentWillLoad(): void {
    this.setInput();
    this.setLabel();

    this.hasError = hasErrorSlot(this.root);
    this.hasPrefix = Boolean(this.root.querySelector('[slot="prefix"]'));
    this.hasSuffix = Boolean(this.root.querySelector('[slot="suffix"]'));

    if (this.hasPrefix) {
      setSlotAriaDescribedby(this.root, this.input, 'prefix');
    }

    if (this.hasSuffix) {
      setSlotAriaDescribedby(this.root, this.input, 'suffix');
    }

    trackComponent(this.root, { variant: this.variant });
  }

  disconnectedCallback(): void {
    this.disabledObserver.disconnect();
    this.requiredObserver.disconnect();
  }

  render(): JSX.Element {
    return (
      <GuxFormFieldContainer labelPosition={this.computedLabelPosition}>
        <GuxFormFieldLabel
          position={this.computedLabelPosition}
          required={this.required}
        >
          <slot name="label" onSlotchange={() => this.setLabel()} />
        </GuxFormFieldLabel>
        <div class="gux-input-and-error-container">
          <div
            class={{
              'gux-input': true,
              'gux-input-error': this.hasError
            }}
          >
            <div
              class={{
                'gux-input-container': true,
                'gux-disabled': this.disabled,
                'gux-has-prefix': this.hasPrefix,
                'gux-has-suffix': this.hasSuffix
              }}
            >
              <slot name="prefix" />
              <slot name="input" />
              <slot name="suffix" />
              {this.clearable && this.hasContent && !this.disabled && (
                <gux-form-field-input-clear-button
                  onClick={() => clearInput(this.input)}
                ></gux-form-field-input-clear-button>
              )}
            </div>
          </div>
          <GuxFormFieldError hasError={this.hasError}>
            <slot name="error" />
          </GuxFormFieldError>
        </div>
      </GuxFormFieldContainer>
    ) as JSX.Element;
  }

  private get variant(): string {
    const labelPositionVariant = this.labelPosition
      ? this.labelPosition.toLowerCase()
      : 'none';
    const typeVariant = this.input.getAttribute('type');
    const clearableVariant = this.clearable ? 'clearable' : 'unclearable';

    return `${typeVariant}-${clearableVariant}-${labelPositionVariant}`;
  }

  private setInput(): void {
    this.input = this.root.querySelector(
      'input[type="email"][slot="input"], input[type="password"][slot="input"], input[type="text"][slot="input"]'
    );

    this.hasContent = hasContent(this.input);

    preventBrowserValidationStyling(this.input);

    this.input.addEventListener('input', () => {
      this.hasContent = hasContent(this.input);
    });

    this.disabled = calculateInputDisabledState(this.input);
    this.required = this.input.required;

    this.disabledObserver = onInputDisabledStateChange(
      this.input,
      (disabled: boolean) => {
        this.disabled = disabled;
      }
    );
    this.requiredObserver = onRequiredChange(
      this.input,
      (required: boolean) => {
        this.required = required;
      }
    );

    validateFormIds(this.root, this.input);
  }

  private setLabel(): void {
    this.label = this.root.querySelector('label[slot="label"]');

    this.computedLabelPosition = getComputedLabelPosition(
      this.label,
      this.labelPosition
    );
  }
}