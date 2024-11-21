import {
  Component,
  Element,
  h,
  Prop,
  Listen,
  Watch,
  State
} from '@stencil/core';
import { trackComponent } from '@utils/tracking/usage';
import { buildI18nForComponent, GetI18nValue } from 'i18n';
import translationResources from '../i18n/en.json';
import { calculateDisabledState } from '../../gux-rich-text-editor.service';
import { OnClickOutside } from '@utils/decorator/on-click-outside';
import { whenEventIsFrom } from '@utils/dom/when-event-is-from';
import { afterNextRender } from '@utils/dom/after-next-render';

/** 
@slot - for a collection of gux-rich-style-list-item elements.
*/

@Component({
  tag: 'gux-rich-text-editor-action-rich-style',
  styleUrl: 'gux-rich-text-editor-action-rich-style.scss',
  shadow: { delegatesFocus: true }
})
export class GuxRichTextEditorActionRichStyle {
  private i18n: GetI18nValue;
  actionButton: HTMLElement;
  listElement: HTMLGuxRichTextEditorListElement;

  @Element()
  private root: HTMLElement;

  @State()
  expanded: boolean = false;

  @Prop({ mutable: true })
  disabled: boolean = false;

  @OnClickOutside({ triggerEvents: 'mousedown' })
  onClickOutside(): void {
    this.expanded = false;
  }

  @Watch('disabled')
  watchDisabled(disabled: boolean) {
    if (disabled) {
      this.expanded = false;
    }
  }

  @Listen('keydown')
  handleKeydown(event: KeyboardEvent): void {
    const isButtonEvent = event.composedPath().includes(this.actionButton);
    const isListEvent = event.composedPath().includes(this.listElement);

    switch (event.key) {
      case 'Escape':
        if (isListEvent) {
          event.preventDefault();
          this.expanded = false;
          this.actionButton.focus();
        }
        break;
      case 'ArrowDown':
      case 'Enter': {
        if (isButtonEvent && !this.expanded) {
          event.preventDefault();
          this.expanded = true;
          this.focusFirstListItem();
        }
        break;
      }
      case 'Tab':
        this.expanded = false;
        break;
      case 'ArrowUp':
        if (isButtonEvent && !this.expanded) {
          event.preventDefault();
          this.expanded = true;
          this.focusLastListItem();
        }
    }
  }

  @Listen('keyup')
  handleKeyup(event: KeyboardEvent): void {
    switch (event.key) {
      case ' ': {
        if (event.composedPath().includes(this.actionButton)) {
          event.preventDefault();
          this.expanded = true;
          this.focusFirstListItem();
        }
        break;
      }
    }
  }

  private focusFirstListItem(): void {
    afterNextRender(() => {
      void this.listElement.guxFocusFirstItem();
    });
  }

  private focusLastListItem(): void {
    afterNextRender(() => {
      void this.listElement.guxFocusLastItem();
    });
  }

  async componentWillLoad(): Promise<void> {
    trackComponent(this.root);
    this.i18n = await buildI18nForComponent(this.root, translationResources);
    this.disabled = calculateDisabledState(this.root);
  }

  private onActionButtonClick(): void {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.focusFirstListItem();
    }
  }

  private onListClick(event: MouseEvent): void {
    whenEventIsFrom('gux-rich-style-list-item', event, () => {
      this.expanded = false;
      this.actionButton.focus();
    });
  }

  private renderPopup(): JSX.Element {
    return (
      <div class="gux-list-container" slot="popup">
        <gux-rich-text-editor-list
          ref={el => (this.listElement = el)}
          onClick={e => this.onListClick(e)}
        >
          <slot />
        </gux-rich-text-editor-list>
      </div>
    ) as JSX.Element;
  }

  private renderTooltip(): JSX.Element {
    if (!this.disabled && !this.expanded) {
      return (
        <gux-tooltip-beta>
          <div slot="content">{this.i18n('richStyle')}</div>
        </gux-tooltip-beta>
      ) as JSX.Element;
    }
  }

  private renderTarget(): JSX.Element {
    return (
      <gux-button-slot accent="ghost" slot="target">
        <button
          type="button"
          ref={el => (this.actionButton = el)}
          class={{ 'gux-is-pressed': this.expanded }}
          onClick={() => this.onActionButtonClick()}
          disabled={this.disabled}
          aria-haspopup="true"
          aria-expanded={this.expanded.toString()}
        >
          {this.i18n('paragraph')}
          <gux-icon
            icon-name="custom/chevron-down-small-regular"
            decorative
          ></gux-icon>
        </button>
        {this.renderTooltip()}
      </gux-button-slot>
    ) as JSX.Element;
  }

  render(): JSX.Element {
    return (
      <gux-popup
        expanded={this.expanded}
        disabled={this.disabled}
        exceedTargetWidth
        placement="bottom-start"
      >
        {this.renderTarget()}
        {this.renderPopup()}
      </gux-popup>
    ) as JSX.Element;
  }
}
