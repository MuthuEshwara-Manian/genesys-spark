import { r as registerInstance, c as createEvent, h, w as writeTask, g as getElement } from './index-816e34d8.js';
import { e as eventIsFrom } from './event-is-from-90b69768.js';
import { r as randomHTMLId } from './random-html-id-8e3f658c.js';

const guxTabLegacyCss = "gux-tab-legacy .gux-tab{display:flex;align-items:center;width:0;height:36px;padding:3px;margin-left:4px;overflow:hidden;border:none;transition:width 0.4s ease-out}gux-tab-legacy .gux-tab:focus-visible{padding:0;border:3px solid #aac9ff;outline:none}gux-tab-legacy .gux-tab.gux-show{width:160px}gux-tab-legacy .gux-tab .tab-title{position:relative;flex:1 1 auto;height:14px;padding-bottom:2px;overflow:hidden;font-size:12px;text-align:left;white-space:nowrap;cursor:default}gux-tab-legacy .gux-tab .tab-title::after{position:absolute;right:0;bottom:0;display:block;width:14px;height:15px;content:''}gux-tab-legacy .gux-tab .gux-tab-options-button{z-index:1;display:flex;flex:0 0 29px;align-items:center;justify-content:center;height:100%;padding:0;cursor:pointer;background:none;border:none}gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible{outline:none}gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible gux-icon{border:3px solid #aac9ff}gux-tab-legacy .gux-tab .gux-tab-options-button gux-icon{width:12px;height:12px;transition:color 0.25s}gux-tab-legacy .gux-tab .tab-icon-container{display:flex;flex:0 0 16px;align-items:center;justify-content:center;height:14px;padding-bottom:2px;margin:0 10px 0 7px}gux-tab-legacy .gux-tab .tab-icon-container gux-icon{width:100%}gux-tab-legacy .gux-tab.selected .tab-title{font-weight:bold}.gux-tab-light-theme .gux-tab{background-color:#c8cfda}.gux-tab-light-theme .gux-tab .tab-title{color:#2e394c}.gux-tab-light-theme .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}.gux-tab-light-theme .gux-tab .gux-tab-options-button{color:#2e394c}.gux-tab-light-theme .gux-tab .gux-tab-options-button:hover gux-icon,.gux-tab-light-theme .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}.gux-tab-light-theme .gux-tab .tab-icon-container{color:#2e394c}.gux-tab-light-theme .gux-tab.selected{background-color:#fdfdfd}.gux-tab-light-theme .gux-tab.selected:active{background-color:#fdfdfd}.gux-tab-light-theme .gux-tab.selected .tab-title{color:#2e394c}.gux-tab-light-theme .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}.gux-tab-light-theme .gux-tab.selected .gux-tab-options-button{color:#2e394c}.gux-tab-light-theme .gux-tab.selected .tab-icon-container{color:#2a60c8}.gux-light-theme gux-tab-legacy .gux-tab{background-color:#c8cfda}.gux-light-theme gux-tab-legacy .gux-tab .tab-title{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}.gux-light-theme gux-tab-legacy .gux-tab .gux-tab-options-button{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab .gux-tab-options-button:hover gux-icon,.gux-light-theme gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}.gux-light-theme gux-tab-legacy .gux-tab .tab-icon-container{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab.selected{background-color:#fdfdfd}.gux-light-theme gux-tab-legacy .gux-tab.selected:active{background-color:#fdfdfd}.gux-light-theme gux-tab-legacy .gux-tab.selected .tab-title{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}.gux-light-theme gux-tab-legacy .gux-tab.selected .gux-tab-options-button{color:#2e394c}.gux-light-theme gux-tab-legacy .gux-tab.selected .tab-icon-container{color:#2a60c8}gux-tab-legacy.gux-light-theme .gux-tab{background-color:#c8cfda}gux-tab-legacy.gux-light-theme .gux-tab .tab-title{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}gux-tab-legacy.gux-light-theme .gux-tab .gux-tab-options-button{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab .gux-tab-options-button:hover gux-icon,gux-tab-legacy.gux-light-theme .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}gux-tab-legacy.gux-light-theme .gux-tab .tab-icon-container{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab.selected{background-color:#fdfdfd}gux-tab-legacy.gux-light-theme .gux-tab.selected:active{background-color:#fdfdfd}gux-tab-legacy.gux-light-theme .gux-tab.selected .tab-title{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}gux-tab-legacy.gux-light-theme .gux-tab.selected .gux-tab-options-button{color:#2e394c}gux-tab-legacy.gux-light-theme .gux-tab.selected .tab-icon-container{color:#2a60c8}gux-tab-legacy .gux-tab{background-color:#c8cfda}gux-tab-legacy .gux-tab .tab-title{color:#2e394c}gux-tab-legacy .gux-tab .tab-title::after{background:linear-gradient(90deg, rgba(200, 207, 218, 0), #c8cfda)}gux-tab-legacy .gux-tab .gux-tab-options-button{color:#2e394c}gux-tab-legacy .gux-tab .gux-tab-options-button:hover gux-icon,gux-tab-legacy .gux-tab .gux-tab-options-button:focus-visible gux-icon{color:#2a60c8}gux-tab-legacy .gux-tab .tab-icon-container{color:#2e394c}gux-tab-legacy .gux-tab.selected{background-color:#fdfdfd}gux-tab-legacy .gux-tab.selected:active{background-color:#fdfdfd}gux-tab-legacy .gux-tab.selected .tab-title{color:#2e394c}gux-tab-legacy .gux-tab.selected .tab-title::after{background:linear-gradient(90deg, rgba(253, 253, 253, 0), #fdfdfd)}gux-tab-legacy .gux-tab.selected .gux-tab-options-button{color:#2e394c}gux-tab-legacy .gux-tab.selected .tab-icon-container{color:#2a60c8}";

const GuxTabLegacy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.internaltabselected = createEvent(this, "internaltabselected", 7);
    this.dropdownOptionsButtonId = randomHTMLId();
    this.tabId = undefined;
    this.active = false;
    this.tabIconName = undefined;
    this.popoverHidden = true;
    this.hasAnimated = false;
  }
  get hasDropdownOptions() {
    return Boolean(this.root.querySelector('[slot="dropdown-options"]'));
  }
  toggleOptions() {
    this.popoverHidden = !this.popoverHidden;
  }
  onSelectDropdownOption(e) {
    this.popoverHidden = true;
    e.stopPropagation();
  }
  selectTab(e) {
    if (eventIsFrom('.gux-tab-options-button', e)) {
      return;
    }
    this.popoverHidden = true;
    this.internaltabselected.emit();
  }
  popoverOnClick(e) {
    e.stopPropagation();
  }
  getDropdownOptions() {
    if (this.hasDropdownOptions) {
      return [
        h("button", { id: this.dropdownOptionsButtonId, type: "button", class: "gux-tab-options-button", onClick: () => this.toggleOptions() }, h("gux-icon", { "icon-name": "menu-kebab-vertical", decorative: true })),
        h("gux-popover-list", { position: "top-end", for: this.dropdownOptionsButtonId, displayDismissButton: false, hidden: this.popoverHidden, closeOnClickOutside: true, onGuxdismiss: () => (this.popoverHidden = true), onClick: (e) => this.popoverOnClick(e) }, h("div", { onClick: (e) => this.onSelectDropdownOption(e) }, h("slot", { name: "dropdown-options" })))
      ];
    }
    return null;
  }
  componentDidLoad() {
    if (!this.hasAnimated) {
      writeTask(() => {
        this.root.querySelector('.gux-tab').classList.add('gux-show');
        this.hasAnimated = true;
      });
    }
  }
  render() {
    return (h("button", { type: "button", class: `gux-tab ${this.active ? 'selected' : ''}`, onClick: e => this.selectTab(e), role: "button" }, this.tabIconName ? (h("div", { class: "tab-icon-container" }, h("gux-icon", { "icon-name": this.tabIconName, decorative: true }))) : null, h("span", { class: "tab-title" }, h("slot", { name: "title" })), this.getDropdownOptions()));
  }
  get root() { return getElement(this); }
};
GuxTabLegacy.style = guxTabLegacyCss;

export { GuxTabLegacy as gux_tab_legacy };