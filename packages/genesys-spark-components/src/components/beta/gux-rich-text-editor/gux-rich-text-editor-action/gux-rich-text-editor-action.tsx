import {
  Component,
  Element,
  Method,
  Prop,
  h,
  State,
  forceUpdate,
  Watch
} from '@stencil/core';
import { GuxRichTextEditorActionTypes } from './gux-rich-text-editor-action.types';
import { trackComponent } from '@utils/tracking/usage';
import { Editor } from '@tiptap/core';
import { buildI18nForComponent, GetI18nValue } from 'i18n';
import translationResources from './i18n/en.json';
import { getClosestElement } from '@utils/dom/get-closest-element';
import { getActionMap } from './gux-rich-text-editor-action-map';

@Component({
  tag: 'gux-rich-text-editor-action',
  styleUrl: 'gux-rich-text-editor-action.scss',
  shadow: true
})
export class GuxRichTextEditorAction {
  private i18n: GetI18nValue;

  @Element()
  root: HTMLElement;

  @Prop()
  action: GuxRichTextEditorActionTypes;

  @Prop({ mutable: true })
  disabled: boolean = false;

  @State()
  private editor: Editor; // Store the editor instance

  @Watch('editor')
  onEditorInstance() {
    this.applyTipTapEventListeners();
  }

  async componentWillLoad(): Promise<void> {
    trackComponent(this.root, { variant: this.action });
    this.i18n = await buildI18nForComponent(this.root, translationResources);
    this.calculateDisabledState();
  }

  // Set the editor instance to the gux-rich-text-editor-action.
  @Method()
  async setEditor(editor: Editor) {
    this.editor = editor; // Assign the editor instance
  }

  private handleActionClick(): void {
    const actionHandler = getActionMap(this.editor)[this.action].action;
    if (actionHandler) {
      actionHandler();
    } else {
      console.warn('Unsupported action', this.action);
    }
  }

  private returnActionTypeIcon(action: GuxRichTextEditorActionTypes): string {
    return getActionMap(this.editor)[action]?.icon || 'fa/bold-regular';
  }

  private renderTooltip(): JSX.Element {
    if (!this.disabled) {
      return (
        <gux-tooltip>
          <div slot="content">{this.i18n(this.action)}</div>
        </gux-tooltip>
      ) as JSX.Element;
    }
  }

  // This is needed to notify stencil that the state of the text-editor has changed.
  private applyTipTapEventListeners(): void {
    this.editor.on('selectionUpdate', () => {
      // The selection has changed.
      forceUpdate(this.root);
    });

    this.editor.on('transaction', () => {
      // The editor state has changed.
      forceUpdate(this.root);
    });
  }

  private calculateDisabledState(): boolean {
    const getParent = getClosestElement(
      'gux-rich-text-editor-beta',
      this.root
    ) as HTMLGuxRichTextEditorBetaElement;
    return (this.disabled = getParent?.disabled || this.disabled);
  }

  private renderActionButton(): JSX.Element {
    if (this.editor) {
      return (
        <gux-button-slot accent="ghost" icon-only>
          <button
            class={this.editor.isActive(this.action) ? 'gux-is-active' : ''}
            type="button"
            onClick={() => this.handleActionClick()}
            disabled={this.disabled}
          >
            <gux-icon
              icon-name={this.returnActionTypeIcon(this.action)}
              decorative
            ></gux-icon>
          </button>
          {this.renderTooltip()}
        </gux-button-slot>
      );
    }
  }

  render(): JSX.Element {
    return this.renderActionButton();
  }
}
