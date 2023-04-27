'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d3bc59d7.js');
const onInputDisabledStateChange = require('./on-input-disabled-state-change-d66fb86b.js');
const onMutation = require('./on-mutation-83dff2a7.js');
const preventBrowserValidationStyling = require('./prevent-browser-validation-styling-d21b1a56.js');
const hasSlot = require('./has-slot-2e73d6e7.js');
const guxFormField_service = require('./gux-form-field.service-6696052f.js');
const usage = require('./usage-da9572bf.js');
require('./random-html-id-b86b61c0.js');
require('./log-error-ddbca3a0.js');
require('./set-input-value-610d7da3.js');
require('./simulate-native-event-fe3e62da.js');

const guxFormFieldCheckboxCss = ".gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:flex-start;justify-content:flex-start;margin:4px 0;font-size:12px;line-height:20px;color:#2e394c}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;align-self:auto;order:0;min-width:16px;min-height:16px;margin:2px 4px 0 0;color:#ea0b0b}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:flex-start;justify-content:flex-start;margin:4px 0;font-size:12px;font-weight:400;line-height:20px;color:#6b7585}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block;color:#2e394c}:host(.gux-input-error) ::slotted(input[type='checkbox']:not(:checked))::before{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.3077 1.84615H3.69231C2.67271 1.84615 1.84615 2.67271 1.84615 3.69231V12.3077C1.84615 13.3273 2.67271 14.1538 3.69231 14.1538H12.3077C13.3273 14.1538 14.1538 13.3273 14.1538 12.3077V3.69231C14.1538 2.67271 13.3273 1.84615 12.3077 1.84615ZM3.69231 0C1.6531 0 0 1.6531 0 3.69231V12.3077C0 14.3469 1.6531 16 3.69231 16H12.3077C14.3469 16 16 14.3469 16 12.3077V3.69231C16 1.6531 14.3469 0 12.3077 0H3.69231Z' fill='%23ea0b0b'/%3E%3C/svg%3E\")}:host(.gux-disabled){cursor:not-allowed;opacity:0.5}:host(.gux-disabled) ::slotted(label){cursor:not-allowed}.gux-input-label{display:flex;flex-direction:row}.gux-input-label .gux-label{display:flex;flex-direction:column}::slotted(input[type='checkbox']){display:inline-grid;width:16px;height:16px;margin:4px;text-align:center;vertical-align:middle;cursor:pointer;border:0;-webkit-appearance:none;appearance:none;outline:none}::slotted(input[type='checkbox'])::before{grid-area:1;content:'';border-radius:15%}::slotted(input[type='checkbox']:focus-visible)::before{outline:3px solid #aac9ff;outline-offset:1px;box-shadow:0 0 0 1px #fdfdfd}::slotted(input[type='checkbox']:not(:checked))::before{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.3077 1.84615H3.69231C2.67271 1.84615 1.84615 2.67271 1.84615 3.69231V12.3077C1.84615 13.3273 2.67271 14.1538 3.69231 14.1538H12.3077C13.3273 14.1538 14.1538 13.3273 14.1538 12.3077V3.69231C14.1538 2.67271 13.3273 1.84615 12.3077 1.84615ZM3.69231 0C1.6531 0 0 1.6531 0 3.69231V12.3077C0 14.3469 1.6531 16 3.69231 16H12.3077C14.3469 16 16 14.3469 16 12.3077V3.69231C16 1.6531 14.3469 0 12.3077 0H3.69231Z' fill='%2377828f'/%3E%3C/svg%3E\")}::slotted(input[type='checkbox']:not(:checked):not(:disabled):not(:indeterminate):hover)::before{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.3077 1.84615H3.69231C2.67271 1.84615 1.84615 2.67271 1.84615 3.69231V12.3077C1.84615 13.3273 2.67271 14.1538 3.69231 14.1538H12.3077C13.3273 14.1538 14.1538 13.3273 14.1538 12.3077V3.69231C14.1538 2.67271 13.3273 1.84615 12.3077 1.84615ZM3.69231 0C1.6531 0 0 1.6531 0 3.69231V12.3077C0 14.3469 1.6531 16 3.69231 16H12.3077C14.3469 16 16 14.3469 16 12.3077V3.69231C16 1.6531 14.3469 0 12.3077 0H3.69231Z' fill='%232a60c8'/%3E%3C/svg%3E\")}::slotted(input[type='checkbox']:checked)::before{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.69231 0H12.3077C13.287 0 14.2261 0.38901 14.9185 1.08145C15.611 1.77389 16 2.71305 16 3.69231V12.3077C16 13.287 15.611 14.2261 14.9185 14.9185C14.2261 15.611 13.287 16 12.3077 16H3.69231C2.71305 16 1.77389 15.611 1.08145 14.9185C0.38901 14.2261 0 13.287 0 12.3077V3.69231C0 2.71305 0.38901 1.77389 1.08145 1.08145C1.77389 0.38901 2.71305 0 3.69231 0ZM5.62483 11.5936C5.79089 11.7597 6.00122 11.8372 6.21155 11.8372C6.43295 11.8372 6.64329 11.7486 6.79827 11.5936L13.2854 5.10652C13.6064 4.78549 13.6064 4.25412 13.2854 3.93308C12.9643 3.61205 12.433 3.61205 12.1119 3.93308L6.21155 9.83348L3.87575 7.4866C3.55472 7.16557 3.02335 7.16557 2.70231 7.4866C2.38128 7.80764 2.38128 8.339 2.70231 8.66004L5.62483 11.5936Z' fill='%232a60c8'/%3E%3C/svg%3E\")}::slotted(input[type='checkbox']:indeterminate)::before{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.69231 1.84615H12.3077C13.3273 1.84615 14.1538 2.67271 14.1538 3.69231V12.3077C14.1538 13.3273 13.3273 14.1538 12.3077 14.1538H3.69231C2.67271 14.1538 1.84615 13.3273 1.84615 12.3077V3.69231C1.84615 2.67271 2.67271 1.84615 3.69231 1.84615ZM0 3.69231C0 1.6531 1.6531 0 3.69231 0H12.3077C14.3469 0 16 1.6531 16 3.69231V12.3077C16 14.3469 14.3469 16 12.3077 16H3.69231C1.6531 16 0 14.3469 0 12.3077V3.69231ZM4.00028 9.2308H12.0003C12.5049 9.2308 12.9234 8.81234 12.9234 8.30773C12.9234 7.80311 12.5049 7.38465 12.0003 7.38465H4.00028C3.49567 7.38465 3.07721 7.80311 3.07721 8.30773C3.07721 8.81234 3.49567 9.2308 4.00028 9.2308Z' fill='%232a60c8'/%3E%3C/svg%3E\")}::slotted(input[type='checkbox']:disabled)::before{cursor:not-allowed;opacity:0.5}::slotted(label){display:inline-block;font-size:12px;line-height:24px;vertical-align:middle}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxFormFieldCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.disabled = undefined;
    this.hasError = false;
    this.hasHelp = false;
  }
  onMutation() {
    this.hasError = hasSlot.hasSlot(this.root, 'error');
    this.hasHelp = hasSlot.hasSlot(this.root, 'help');
  }
  componentWillLoad() {
    this.setInput();
    this.hasError = hasSlot.hasSlot(this.root, 'error');
    this.hasHelp = hasSlot.hasSlot(this.root, 'help');
    usage.trackComponent(this.root);
  }
  disconnectedCallback() {
    if (this.disabledObserver) {
      this.disabledObserver.disconnect();
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        'gux-input-error': this.hasError,
        'gux-disabled': this.disabled
      } }, index.h("div", { class: "gux-form-field-container" }, index.h("div", { class: "gux-input-label" }, index.h("div", { class: "gux-input" }, index.h("slot", { name: "input", onSlotchange: () => this.setInput() })), index.h("div", { class: "gux-label" }, index.h("slot", { name: "label" }), index.h(guxFormField_service.GuxFormFieldError, { show: this.hasError }, index.h("slot", { name: "error" })), index.h(guxFormField_service.GuxFormFieldHelp, { show: !this.hasError && this.hasHelp }, index.h("slot", { name: "help" })))))));
  }
  setInput() {
    this.input = this.root.querySelector('input[type="checkbox"][slot="input"]');
    preventBrowserValidationStyling.preventBrowserValidationStyling(this.input);
    this.disabled = onInputDisabledStateChange.calculateInputDisabledState(this.input);
    this.disabledObserver = onInputDisabledStateChange.onInputDisabledStateChange(this.input, (disabled) => {
      this.disabled = disabled;
    });
    guxFormField_service.validateFormIds(this.root, this.input);
  }
  get root() { return index.getElement(this); }
};
__decorate([
  onMutation.OnMutation({ childList: true, subtree: true })
], GuxFormFieldCheckbox.prototype, "onMutation", null);
GuxFormFieldCheckbox.style = guxFormFieldCheckboxCss;

exports.gux_form_field_checkbox = GuxFormFieldCheckbox;