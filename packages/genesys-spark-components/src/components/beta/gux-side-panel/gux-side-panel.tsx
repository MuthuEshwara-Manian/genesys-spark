import {
  Component,
  Event,
  EventEmitter,
  h,
  Element,
  Prop
} from '@stencil/core';
import { trackComponent } from '@utils/tracking/usage';
import { GuxSidePanelSize } from './gux-side-panel.types';
import { hasSlot } from '@utils/dom/has-slot';

@Component({
  tag: 'gux-side-panel-beta',
  styleUrl: 'gux-side-panel.scss',
  shadow: true
})
export class GuxSidePanel {
  @Element()
  private root: HTMLElement;

  @Prop()
  size: GuxSidePanelSize = 'small';

  @Event()
  sidePanelDismiss: EventEmitter<void>;

  private onDismissHandler(): void {
    this.sidePanelDismiss.emit();
  }

  componentWillLoad(): void {
    trackComponent(this.root);
  }

  render(): JSX.Element {
    return (
      <div class={`gux-side-panel gux-side-panel-${this.size}`}>
        <header>
          <gux-dismiss-button onClick={this.onDismissHandler.bind(this)} />
          <slot name="heading" />
        </header>
        {hasSlot(this.root, 'description') && (
          <div class="gux-side-panel-description">
            <slot name="description" />
          </div>
        )}
        <div class="gux-side-panel-content">
          <slot name="content" />
        </div>
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    ) as JSX.Element;
  }
}
