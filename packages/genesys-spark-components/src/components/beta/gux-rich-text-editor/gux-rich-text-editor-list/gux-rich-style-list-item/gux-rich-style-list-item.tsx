import { Component, h, Element, Prop, Host, Listen } from '@stencil/core';
import { GuxTextStyle } from './gux-rich-style-list-item.types';
import { trackComponent } from '@utils/tracking/usage';
import { getClosestElement } from '@utils/dom/get-closest-element';

/**
 * @slot - text
 */

@Component({
  tag: 'gux-rich-style-list-item',
  styleUrl: 'gux-rich-style-list-item.scss',
  shadow: { delegatesFocus: true }
})
export class GuxRichStyleListItem {
  @Element()
  root: HTMLGuxRichStyleListItemElement;

  @Prop()
  disabled: boolean = false;

  @Prop()
  textStyle: GuxTextStyle;

  @Prop()
  value: string;

  @Prop()
  selected: boolean = false;

  @Listen('mouseup')
  onMouseUp(): void {
    this.focusParentList();
  }

  @Listen('mouseover')
  onMouseOver(): void {
    this.focusParentList();
  }

  private focusParentList(): void {
    const parentList = getClosestElement(
      'gux-rich-text-editor-list',
      this.root
    ) as HTMLElement;

    if (parentList && parentList.shadowRoot.activeElement === null) {
      this.root.blur();
      parentList.focus({
        preventScroll: true
      });
    }
  }

  componentWillLoad(): void {
    trackComponent(this.root);
  }

  render(): JSX.Element {
    return (
      <Host role="listitem">
        <button
          class={`gux-typography-${this.textStyle}`}
          type="button"
          tabIndex={-1}
          disabled={this.disabled}
        >
          <slot></slot>
        </button>
      </Host>
    ) as JSX.Element;
  }
}
