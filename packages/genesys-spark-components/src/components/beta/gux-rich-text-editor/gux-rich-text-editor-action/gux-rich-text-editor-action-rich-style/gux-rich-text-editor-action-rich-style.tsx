import { Component, Element, h, Prop, Listen, Watch } from '@stencil/core';
import { trackComponent } from '@utils/tracking/usage';
import { buildI18nForComponent, GetI18nValue } from 'i18n';
import translationResources from '../i18n/en.json';
import { calculateDisabledState } from '../../gux-rich-text-editor.service';
import { OnClickOutside } from '@utils/decorator/on-click-outside';
import { setInitialActiveOption } from 'components/stable/gux-listbox/gux-listbox.service';

/** 
@slot - for a gux-listbox containing gux-rich-style-option elements.
*/

@Component({
  tag: 'gux-rich-text-editor-action-rich-style',
  styleUrl: 'gux-rich-text-editor-action-rich-style.scss',
  shadow: { delegatesFocus: true }
})
export class GuxRichTextEditorActionRichStyle {
  private i18n: GetI18nValue;
  actionButton: HTMLElement;
  listboxElement: HTMLGuxListboxElement;

  @Element()
  private root: HTMLElement;

  @Prop({ mutable: true })
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
    switch (event.key) {
      case 'Escape':
        this.expanded = false;
        this.actionButton.focus();
        return;
      case 'ArrowDown':
        event.preventDefault();
        this.expanded = true;
        this.listboxElement.focus();
        setInitialActiveOption(this.listboxElement);

        return;
      case 'Tab':
        if (this.activeElementIsListbox()) {
          event.preventDefault();
          this.expanded = false;
          return this.actionButton.focus();
        }
        return;
    }
  }

  private activeElementIsListbox(): boolean {
    return document.activeElement == this.listboxElement;
  }

  connectedCallback(): void {
    this.listboxElement = this.root?.querySelector('gux-listbox');
  }

  async componentWillLoad(): Promise<void> {
    trackComponent(this.root);
    this.i18n = await buildI18nForComponent(this.root, translationResources);
    this.disabled = calculateDisabledState(this.root);
  }

  private togglePopup(): void {
    this.expanded = !this.expanded;
  }

  private renderPopup(): JSX.Element {
    return (<slot slot="popup"></slot>) as JSX.Element;
  }

  private renderTooltip(): JSX.Element {
    if (!this.disabled && !this.expanded) {
      return (
        <gux-tooltip>
          <div slot="content">{this.i18n('richStyle')}</div>
        </gux-tooltip>
      ) as JSX.Element;
    }
  }

  private renderTarget(): JSX.Element {
    return (
      <gux-button-slot accent="ghost" slot="target">
        <button
          type="button"
          ref={el => (this.actionButton = el)}
          class={{ 'gux-is-active': this.expanded }}
          onClick={() => this.togglePopup()}
          disabled={this.disabled}
          aria-haspopup="listbox"
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
        placement="bottom-end"
      >
        {this.renderTarget()}
        {this.renderPopup()}
      </gux-popup>
    ) as JSX.Element;
  }
}
