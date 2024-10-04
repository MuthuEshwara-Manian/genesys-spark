import { Component, h, Element, Prop, Watch, Host } from '@stencil/core';
import { randomHTMLId } from '@utils/dom/random-html-id';
import { GuxTypographySetting } from './gux-rich-style-option.types';

/**
 * @slot - text
 */

@Component({
  tag: 'gux-rich-style-option',
  styleUrl: 'gux-rich-style-option.scss',
  shadow: true
})
export class GuxRichStyleOption {
  private truncateElement: HTMLGuxTruncateElement;

  @Element()
  root: HTMLElement;

  @Prop()
  value: string;

  @Prop()
  active: boolean = false;

  @Prop()
  selected: boolean = false;

  @Prop()
  disabled: boolean = false;

  @Prop()
  filtered: boolean = false;

  @Prop()
  typographySetting: GuxTypographySetting;

  @Watch('active')
  handleActive(active: boolean) {
    if (active) {
      void this.truncateElement?.setShowTooltip();
    } else {
      void this.truncateElement?.setHideTooltip();
    }
  }

  private getAriaSelected(): boolean | string {
    if (this.disabled) {
      return false;
    }

    return this.selected ? 'true' : 'false';
  }

  componentWillLoad(): void {
    this.root.id = this.root.id || randomHTMLId('gux-rich-style-option');
  }

  render(): JSX.Element {
    return (
      <Host
        role="option"
        class={{
          'gux-active': this.active,
          'gux-disabled': this.disabled,
          'gux-filtered': this.filtered,
          'gux-selected': this.selected,
          [`gux-typography-${this.typographySetting}`]: true
        }}
        aria-selected={this.getAriaSelected()}
        aria-disabled={this.disabled.toString()}
      >
        <div class="gux-option-wrapper">
          <gux-truncate ref={el => (this.truncateElement = el)}>
            <slot />
          </gux-truncate>
        </div>
      </Host>
    ) as JSX.Element;
  }
}
