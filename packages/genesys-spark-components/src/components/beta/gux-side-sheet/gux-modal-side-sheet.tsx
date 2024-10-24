import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Method,
  Prop,
  Watch
} from '@stencil/core';
import { GuxSideSheetSize } from './gux-side-sheet.types';
import { randomHTMLId } from '@utils/dom/random-html-id';
import { hasSlot } from '@utils/dom/has-slot';
import { trackComponent } from '@utils/tracking/usage';

@Component({
  tag: 'gux-modal-side-sheet-beta',
  styleUrl: './gux-modal-side-sheet.scss',
  shadow: true
})
export class GuxModalSideSheet {
  @Element()
  private root: HTMLElement;

  @Prop({ mutable: true })
  open: boolean = false;

  @Prop()
  size: GuxSideSheetSize = 'medium';

  private dialogElement: HTMLDialogElement;
  @Watch('open')
  syncOpenState() {
    if (this.open) {
      this.dialogElement.showModal();
    } else {
      this.dialogElement.close();
      this.modalSideSheetDismiss.emit();
    }
  }

  @Event()
  modalSideSheetDismiss: EventEmitter<void>;

  @Listen('sideSheetDismiss')
  sidesheetdismissHandler(): void {
    this.open = false;
  }

  @Listen('keydown')
  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.open = false;
        return;
    }
  }

  @Method()
  // eslint-disable-next-line @typescript-eslint/require-await
  async showModal(): Promise<void> {
    this.open = true;
  }

  @Method()
  // eslint-disable-next-line @typescript-eslint/require-await
  async close(): Promise<void> {
    this.open = false;
  }

  componentWillLoad(): void {
    trackComponent(this.root);
  }

  render(): JSX.Element {
    const titleID: string = randomHTMLId();
    return (
      <dialog ref={el => (this.dialogElement = el)} aria-labelledby={titleID}>
        <gux-side-sheet-beta size={this.size}>
          <div slot="heading" id={titleID}>
            <slot name="heading" />
          </div>
          {hasSlot(this.root, 'description') && (
            <div slot="description">
              <slot name="description" />
            </div>
          )}
          <div slot="content">
            <slot name="content" />
          </div>
          <div slot="footer">
            <slot name="footer" />
          </div>
        </gux-side-sheet-beta>
      </dialog>
    ) as JSX.Element;
  }
}
