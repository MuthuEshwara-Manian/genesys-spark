'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d3bc59d7.js');
const sortable_esm = require('./sortable.esm-73cf219b.js');
const usage = require('./usage-da9572bf.js');
const index$1 = require('./index-c4441830.js');
const whenEventIsFrom = require('./when-event-is-from-69b5ca13.js');
require('./get-closest-element-ab4b2eee.js');

const createNewTab = "Create New Tab";
const scrollLeft = "Scroll Left";
const scrollRight = "Scroll Right";
const disableNewTab = "Maximum number of tabs created has been reached";
const tabsResources = {
	createNewTab: createNewTab,
	scrollLeft: scrollLeft,
	scrollRight: scrollRight,
	disableNewTab: disableNewTab
};

const guxTabsLegacyCss = ".gux-tabs{display:flex;align-items:flex-end;width:100%;height:40px;overflow-x:hidden}.gux-tabs .action-button-container{display:flex;border-radius:2px}.gux-tabs .action-button-container .arrow-button{display:flex;align-items:center;justify-content:center;width:24px;height:40px;padding:0;border:none;border-style:solid;border-width:1px;border-radius:2px;transition:color 0.25s}.gux-tabs .action-button-container .arrow-button gux-icon{width:10px;height:10px}.gux-tabs .action-button-container .add-tab{display:flex;align-items:center;justify-content:center;width:40px;height:40px;padding:0;border:none;border-style:solid;border-width:1px;border-radius:2px;transition:color 0.25s}.gux-tabs .action-button-container .add-tab:disabled{opacity:0.5}.gux-tabs .action-button-container .add-tab:disabled:hover{color:#202937}.gux-tabs .action-button-container .add-tab:disabled:active{background-color:#e2e6ee}.gux-tabs .action-button-container .add-tab gux-icon{width:16px;height:16px}.gux-tabs .scrollable-section{display:flex;flex:1 1 auto;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none}.gux-tabs .scrollable-section::-webkit-scrollbar{height:0}.gux-tabs .scrollable-section .add-tab{display:flex;align-items:center;justify-content:center;width:36px;min-width:36px;height:36px;padding:0;margin-left:4px;border:none;transition:color 0.25s}.gux-tabs .scrollable-section .add-tab gux-icon{width:16px;height:16px}.gux-tabs-light-theme{background-color:#e2e6ee}.gux-tabs-light-theme .action-button-container{background-color:#c8cfda}.gux-tabs-light-theme .action-button-container .arrow-button{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-tabs-light-theme .action-button-container .arrow-button:hover{color:#2a60c8}.gux-tabs-light-theme .action-button-container .arrow-button:active{background-color:#d2d8e5}.gux-tabs-light-theme .action-button-container .add-tab{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-tabs-light-theme .action-button-container .add-tab:hover{color:#2a60c8}.gux-tabs-light-theme .action-button-container .add-tab:active{background-color:#d2d8e5}.gux-tabs-light-theme .scrollable-section::-webkit-scrollbar-track{background:#fdfdfd}.gux-tabs-light-theme .scrollable-section::-webkit-scrollbar-thumb{background:#202937}.gux-tabs-light-theme .scrollable-section::-webkit-scrollbar-thumb:hover{background:#202937}.gux-tabs-light-theme .scrollable-section .add-tab{color:#202937;background-color:#c8cfda}.gux-tabs-light-theme .scrollable-section .add-tab:hover{color:#2a60c8}.gux-tabs-light-theme .scrollable-section .add-tab:active{background-color:#b9c2d0}.gux-light-theme .gux-tabs{background-color:#e2e6ee}.gux-light-theme .gux-tabs .action-button-container{background-color:#c8cfda}.gux-light-theme .gux-tabs .action-button-container .arrow-button{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-light-theme .gux-tabs .action-button-container .arrow-button:hover{color:#2a60c8}.gux-light-theme .gux-tabs .action-button-container .arrow-button:active{background-color:#d2d8e5}.gux-light-theme .gux-tabs .action-button-container .add-tab{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-light-theme .gux-tabs .action-button-container .add-tab:hover{color:#2a60c8}.gux-light-theme .gux-tabs .action-button-container .add-tab:active{background-color:#d2d8e5}.gux-light-theme .gux-tabs .scrollable-section::-webkit-scrollbar-track{background:#fdfdfd}.gux-light-theme .gux-tabs .scrollable-section::-webkit-scrollbar-thumb{background:#202937}.gux-light-theme .gux-tabs .scrollable-section::-webkit-scrollbar-thumb:hover{background:#202937}.gux-light-theme .gux-tabs .scrollable-section .add-tab{color:#202937;background-color:#c8cfda}.gux-light-theme .gux-tabs .scrollable-section .add-tab:hover{color:#2a60c8}.gux-light-theme .gux-tabs .scrollable-section .add-tab:active{background-color:#b9c2d0}.gux-tabs.gux-light-theme{background-color:#e2e6ee}.gux-tabs.gux-light-theme .action-button-container{background-color:#c8cfda}.gux-tabs.gux-light-theme .action-button-container .arrow-button{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-tabs.gux-light-theme .action-button-container .arrow-button:hover{color:#2a60c8}.gux-tabs.gux-light-theme .action-button-container .arrow-button:active{background-color:#d2d8e5}.gux-tabs.gux-light-theme .action-button-container .add-tab{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-tabs.gux-light-theme .action-button-container .add-tab:hover{color:#2a60c8}.gux-tabs.gux-light-theme .action-button-container .add-tab:active{background-color:#d2d8e5}.gux-tabs.gux-light-theme .scrollable-section::-webkit-scrollbar-track{background:#fdfdfd}.gux-tabs.gux-light-theme .scrollable-section::-webkit-scrollbar-thumb{background:#202937}.gux-tabs.gux-light-theme .scrollable-section::-webkit-scrollbar-thumb:hover{background:#202937}.gux-tabs.gux-light-theme .scrollable-section .add-tab{color:#202937;background-color:#c8cfda}.gux-tabs.gux-light-theme .scrollable-section .add-tab:hover{color:#2a60c8}.gux-tabs.gux-light-theme .scrollable-section .add-tab:active{background-color:#b9c2d0}.gux-tabs{background-color:#e2e6ee}.gux-tabs .action-button-container{background-color:#c8cfda}.gux-tabs .action-button-container .arrow-button{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-tabs .action-button-container .arrow-button:hover{color:#2a60c8}.gux-tabs .action-button-container .arrow-button:active{background-color:#d2d8e5}.gux-tabs .action-button-container .add-tab{color:#202937;background-color:#e2e6ee;border-color:#c8cfda}.gux-tabs .action-button-container .add-tab:hover{color:#2a60c8}.gux-tabs .action-button-container .add-tab:active{background-color:#d2d8e5}.gux-tabs .scrollable-section::-webkit-scrollbar-track{background:#fdfdfd}.gux-tabs .scrollable-section::-webkit-scrollbar-thumb{background:#202937}.gux-tabs .scrollable-section::-webkit-scrollbar-thumb:hover{background:#202937}.gux-tabs .scrollable-section .add-tab{color:#202937;background-color:#c8cfda}.gux-tabs .scrollable-section .add-tab:hover{color:#2a60c8}.gux-tabs .scrollable-section .add-tab:active{background-color:#b9c2d0}";

const GuxTabsLegacy = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.newTab = index.createEvent(this, "newTab", 7);
    this.input = index.createEvent(this, "input", 7);
    this.sortChanged = index.createEvent(this, "sortChanged", 7);
    this.allowSort = false;
    this.showNewTabButton = false;
    this.value = '';
    this.tabLimit = Infinity;
    this.disableAddTabButton = false;
    this.hasScrollbar = false;
  }
  watchHandler(newValue) {
    const tabs = Array.from(this.root.querySelectorAll('gux-tab-legacy'));
    for (const tab of tabs) {
      tab.active = tab.tabId === newValue;
    }
  }
  internaltabselectedHandler(e) {
    whenEventIsFrom.whenEventIsFrom('gux-tab-legacy', e, elem => {
      const tab = elem;
      if (!tab.active) {
        this.value = tab.tabId;
        this.input.emit();
      }
    });
  }
  createSortable() {
    this.sortableInstance = new sortable_esm.Sortable(this.root, {
      animation: 250,
      draggable: 'gux-tab-legacy',
      filter: '.ignore-sort',
      onMove: (event) => {
        return !event.related.classList.contains('ignore-sort');
      },
      onUpdate: () => {
        const tabIds = Array.from(this.root.querySelectorAll('gux-tab-legacy')).map(tabElement => tabElement.tabId);
        this.sortChanged.emit(tabIds);
      }
    });
  }
  destroySortable() {
    if (this.sortableInstance) {
      this.sortableInstance.destroy();
      this.sortableInstance = null;
    }
  }
  disconnectedCallback() {
    if (this.sortableInstance) {
      this.destroySortable();
    }
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.root.shadowRoot.querySelector('.gux-tabs'));
    }
    if (this.domObserver) {
      this.domObserver.disconnect();
    }
  }
  async componentWillLoad() {
    usage.trackComponent(this.root);
    this.i18n = await index$1.buildI18nForComponent(this.root, tabsResources);
  }
  componentWillRender() {
    const tabs = Array.from(this.root.querySelectorAll('gux-tab-legacy'));
    if (tabs.length >= this.tabLimit) {
      this.disableAddTabButton = true;
    }
  }
  checkForScrollbarHideOrShow() {
    index.readTask(() => {
      const el = this.root.shadowRoot.querySelector('.scrollable-section');
      const hasScrollbar = el.clientWidth !== el.scrollWidth;
      if (hasScrollbar !== this.hasScrollbar) {
        this.hasScrollbar = hasScrollbar;
      }
    });
  }
  componentDidLoad() {
    if (this.allowSort && !this.sortableInstance) {
      this.createSortable();
    }
    if (!this.resizeObserver && window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(this.checkForScrollbarHideOrShow.bind(this));
    }
    if (this.resizeObserver) {
      this.resizeObserver.observe(this.root.shadowRoot.querySelector('.gux-tabs'));
    }
    if (!this.domObserver && window.MutationObserver) {
      this.domObserver = new MutationObserver(this.checkForScrollbarHideOrShow.bind(this));
    }
    if (this.domObserver) {
      this.domObserver.observe(this.root, {
        childList: true,
        attributes: false,
        subtree: true
      });
    }
    setTimeout(() => {
      this.checkForScrollbarHideOrShow();
    }, 500);
  }
  componentDidRender() {
    setTimeout(() => {
      index.readTask(() => {
        if (this.value) {
          const activeTab = this.root.querySelector(`gux-tab-legacy[tab-id='${this.value}']`);
          if (activeTab) {
            activeTab.active = true;
          }
        }
      });
    }, 500);
  }
  scrollLeft() {
    index.writeTask(() => {
      this.root.shadowRoot
        .querySelector('.scrollable-section')
        .scrollBy(-100, 0);
    });
  }
  scrollRight() {
    index.writeTask(() => {
      this.root.shadowRoot
        .querySelector('.scrollable-section')
        .scrollBy(100, 0);
    });
  }
  render() {
    const AddNewTabButton = (props) => {
      return (index.h("button", { title: this.disableAddTabButton
          ? this.i18n('disableNewTab')
          : this.i18n('createNewTab'), class: "add-tab", onClick: () => props.onClick(), disabled: this.disableAddTabButton }, index.h("gux-icon", { "icon-name": "add", decorative: true })));
    };
    return (index.h("div", { class: "gux-tabs" }, index.h("div", { class: "action-button-container" }, this.hasScrollbar ? (index.h("button", { title: this.i18n('scrollLeft'), class: "arrow-button", onClick: () => this.scrollLeft() }, index.h("gux-icon", { "icon-name": "chevron-left", decorative: true }))) : null), index.h("div", { class: "scrollable-section" }, index.h("slot", null), this.showNewTabButton && !this.hasScrollbar ? (index.h(AddNewTabButton, { onClick: () => this.newTab.emit() })) : null), index.h("div", { class: "action-button-container" }, this.hasScrollbar ? (index.h("button", { title: this.i18n('scrollRight'), class: "arrow-button", onClick: () => this.scrollRight() }, index.h("gux-icon", { "icon-name": "chevron-right", decorative: true }))) : null, this.showNewTabButton && this.hasScrollbar ? (index.h(AddNewTabButton, { onClick: () => this.newTab.emit() })) : null)));
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["watchHandler"]
  }; }
};
GuxTabsLegacy.style = guxTabsLegacyCss;

exports.gux_tabs_legacy = GuxTabsLegacy;