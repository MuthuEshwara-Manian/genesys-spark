import { Component, Element, h, Prop } from '@stencil/core';
import { trackComponent } from '@utils/tracking/usage';
import {
  GuxSidePanelHeadingLevel,
  GuxSidePanelHeadingTag
} from '../../gux-side-panel.types';

@Component({
  tag: 'gux-side-panel-heading',
  styleUrl: 'gux-side-panel-heading.scss',
  shadow: true
})
export class GuxSidePanelHeading {
  @Element()
  private root: HTMLElement;
  /**
   * Heading level, 1-6.
   */
  @Prop()
  level: GuxSidePanelHeadingLevel = 1;

  @Prop()
  text: string;

  @Prop()
  icon: string;

  private HeadingTag: GuxSidePanelHeadingTag;

  componentWillLoad(): void {
    trackComponent(this.root);
    this.HeadingTag = `h${this.level}` as GuxSidePanelHeadingTag;
  }

  render(): JSX.Element {
    return (
      <this.HeadingTag>
        {this.icon && (
          <gux-icon decorative size="medium" icon-name={this.icon} />
        )}
        <gux-truncate>
          <slot />
        </gux-truncate>
      </this.HeadingTag>
    ) as JSX.Element;
  }
}
