import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  JSX,
  Prop,
  State
} from '@stencil/core';

import { trackComponent } from '@utils/tracking/usage';

import {
  GuxItemsPerPage,
  GuxPaginationLayout,
  GuxPaginationState
} from './gux-pagination.types';

@Component({
  styleUrl: 'gux-pagination.less',
  tag: 'gux-pagination',
  shadow: true
})
export class GuxPagination implements ComponentInterface {
  @Element()
  private root: HTMLElement;

  /**
   * The currently select page. Changes are watched by the component.
   */
  @Prop({ mutable: true })
  currentPage: number = 1;

  /**
   * The total number of items in the data set. Used to calculate total page count
   */
  @Prop()
  totalItems: number = 0;

  /**
   * The max number of items on a page. Used to calculate total page count
   */
  @Prop({ mutable: true })
  itemsPerPage: GuxItemsPerPage = 25;

  /**
   * The pagination component can have different layouts to suit the available space
   */
  @Prop()
  layout: GuxPaginationLayout = 'full';

  /**
   * The total number of pages needed for the the data set.
   */
  @State()
  private totalPages: number;

  @Event()
  private guxpaginationchange: EventEmitter<GuxPaginationState>;

  private setPage(page: number): void {
    console.log('>>>setPage 1');
    if (page <= 0) {
      this.setPage(1);
      return;
    }
    console.log('>>>setPage 2');
    const totalPages = this.calculateTotalPages();
    if (page > totalPages) {
      this.setPage(totalPages);
      return;
    }
    console.log('>>>setPage 3');
    this.currentPage = page;
    this.guxpaginationchange.emit({
      currentPage: this.currentPage,
      itemsPerPage: this.itemsPerPage
    });
    console.log('>>>setPage 4');
  }

  private calculateTotalPages(): number {
    console.log('>>>calculateTotalPages');
    return Math.max(1, Math.ceil(this.totalItems / this.itemsPerPage));
  }

  private calculateCurrentPage(): number {
    console.log('>>>calculateCurrentPage 1');
    const minCurrentPage = this.totalPages > 0 ? 1 : 0;
    console.log('>>>calculateCurrentPage 2');
    return Math.max(
      minCurrentPage,
      Math.min(this.currentPage, this.totalPages)
    );
  }

  private handleInternalitemsperpagechange(event: CustomEvent): void {
    console.log('>>>handleInternalitemsperpagechange 1');
    this.itemsPerPage = event.detail as GuxItemsPerPage;
    this.setPage(1);
    console.log('>>>handleInternalitemsperpagechange 2');
  }

  private handleInternalcurrentpagechange(event: CustomEvent): void {
    console.log('>>>handleInternalcurrentpagechange 1');
    this.setPage(event.detail as number);
    console.log('>>>handleInternalcurrentpagechange 1');
  }

  private getPaginationInfoElement(layout: GuxPaginationLayout): JSX.Element {
    console.log('>>>getPaginationInfoElement 1');
    if (layout === 'expanded') {
      return null;
    }
    console.log('>>>getPaginationInfoElement 2');
    const content = [
      <gux-pagination-item-counts
        total-items={this.totalItems}
        current-page={this.currentPage}
        items-per-page={this.itemsPerPage}
      />
    ];
    console.log('>>>getPaginationInfoElement 3');
    if (layout === 'full') {
      content.push(
        <gux-pagination-items-per-page
          items-per-page={this.itemsPerPage}
          onInternalitemsperpagechange={this.handleInternalitemsperpagechange.bind(
            this
          )}
        ></gux-pagination-items-per-page>
      );
    }
    console.log('>>>getPaginationInfoElement 4');
    return (<div class="gux-pagination-info">{content}</div>) as JSX.Element;
  }

  componentWillLoad(): void {
    console.log('>>>componentWillLoad 1');
    trackComponent(this.root, { variant: this.layout });
    console.log('>>>componentWillLoad 2');
  }

  componentWillRender(): void {
    console.log('>>>componentWillRender 1');
    this.totalPages = this.calculateTotalPages();
    this.currentPage = this.calculateCurrentPage();
    console.log('>>>componentWillRender 2');
  }

  render(): JSX.Element {
    console.log('>>>render');
    return (
      <div class="gux-pagination-container">
        {this.getPaginationInfoElement(this.layout)}
        <div class="gux-pagination-change">
          <gux-pagination-buttons
            layout={this.layout}
            current-page={this.currentPage}
            total-pages={this.totalPages}
            onInternalcurrentpagechange={this.handleInternalcurrentpagechange.bind(
              this
            )}
          />
        </div>
      </div>
    ) as JSX.Element;
  }
}
