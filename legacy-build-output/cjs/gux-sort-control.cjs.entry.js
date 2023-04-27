'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d3bc59d7.js');
const index$1 = require('./index-c4441830.js');
const usage = require('./usage-da9572bf.js');
const getClosestElement = require('./get-closest-element-ab4b2eee.js');
const onMutation = require('./on-mutation-8f8a4460.js');
const en = require('./en-dc1f49b7.js');

const guxSortControlCss = ".gux-container{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:flex-start;align-items:center;justify-content:flex-start;border-top:3px solid transparent;border-bottom:3px solid transparent}.gux-container:focus-within{border-bottom-color:#75a8ff}.gux-container .gux-sort-button{all:unset;flex:1 1 auto;align-self:stretch;order:0;cursor:pointer}.gux-container .gux-sort-button .gux-sort-icon{float:right;width:16px;height:16px;margin:8px;color:#d7dce5}.gux-container .gux-sort-button .gux-sort-icon.gux-left{float:left}.gux-container .gux-sort-button.gux-active .gux-sort-icon{color:#2e394c}.gux-container .gux-resize-spacer{flex:0 1 auto;align-self:stretch;order:0;width:2px}.gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}";

const GuxSortControl = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.guxsortchanged = index.createEvent(this, "guxsortchanged", 7);
    this.includeUnsorted = false;
    this.headerContent = undefined;
    this.active = false;
    this.sort = 'none';
    this.isLeftAlignIcon = false;
  }
  async componentWillLoad() {
    usage.trackComponent(this.root);
    this.i18n = await index$1.buildI18nForComponent(this.root, en.tableResources, 'gux-table');
    this.tableHeader = getClosestElement.getClosestElement('th', this.root);
    this.thObserver = onMutation.onMutation(this.tableHeader, () => {
      this.setState();
    }, {
      attributes: true,
      childList: false,
      subtree: false
    });
    this.setState();
  }
  disconnectedCallback() {
    if (this.thObserver) {
      this.thObserver.disconnect();
    }
  }
  onClick() {
    this.guxsortchanged.emit({
      columnName: this.tableHeader.dataset.columnName,
      sortDirection: this.getNextSort(this.sort)
    });
  }
  setState() {
    this.headerContent = this.tableHeader.textContent;
    this.isLeftAlignIcon =
      this.tableHeader.hasAttribute('data-cell-numeric') ||
        this.tableHeader.hasAttribute('data-cell-action');
    const ariaSort = this.tableHeader.getAttribute('aria-sort');
    switch (ariaSort) {
      case 'ascending':
      case 'descending':
        this.active = true;
        this.sort = ariaSort;
        break;
      default:
        this.active = false;
        this.sort = 'none';
    }
  }
  getIconName(colSortDirection) {
    switch (colSortDirection) {
      case 'descending':
        return 'arrow-solid-up';
      case 'ascending':
      default:
        return 'arrow-solid-down';
    }
  }
  getNextSort(colSortDirection) {
    switch (colSortDirection) {
      case 'none':
        return 'ascending';
      case 'ascending':
        return 'descending';
      case 'descending':
      default: {
        if (this.includeUnsorted) {
          return 'none';
        }
        return 'ascending';
      }
    }
  }
  getSRText(colSortDirection) {
    switch (colSortDirection) {
      case 'ascending':
        return this.i18n('ascendingColumnSort', {
          headerContent: this.headerContent
        });
      case 'descending': {
        if (this.includeUnsorted) {
          return this.i18n('descendingColumnSortIncludeUnsorted', {
            headerContent: this.headerContent
          });
        }
        return this.i18n('descendingColumnSort', {
          headerContent: this.headerContent
        });
      }
      default:
        return this.i18n('noColumnSort', { headerContent: this.headerContent });
    }
  }
  render() {
    return (index.h("div", { class: "gux-container" }, index.h("button", { class: {
        'gux-sort-button': true,
        'gux-active': this.active
      }, type: "button", onClick: () => this.onClick() }, index.h("span", { class: "gux-sr-only" }, this.getSRText(this.sort)), index.h("gux-icon", { class: {
        'gux-sort-icon': true,
        'gux-left': this.isLeftAlignIcon
      }, "icon-name": this.getIconName(this.sort), decorative: true })), index.h("div", { class: "gux-resize-spacer" })));
  }
  static get delegatesFocus() { return true; }
  get root() { return index.getElement(this); }
};
GuxSortControl.style = guxSortControlCss;

exports.gux_sort_control = GuxSortControl;