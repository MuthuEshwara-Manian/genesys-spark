import{r as t,c as i,h as e,g as s}from"./p-9031eb6a.js";import{b as r}from"./p-2b58afeb.js";import{O as o}from"./p-09124c44.js";import{a as n,o as a}from"./p-3701eff0.js";import{t as l}from"./p-a818a41d.js";import{G as h,g as f,a as p}from"./p-b4dbf6f0.js";import{G as d,a as u,v as g,g as x}from"./p-f007a6f8.js";import{h as m}from"./p-08bc2e6b.js";import"./p-8a133b9b.js";import"./p-cbcbd1bb.js";import"./p-45fec011.js";import"./p-8fe7daff.js";import"./p-d176c2ae.js";const c={required:"Required",invalidPhoneNumber:"Number is not valid"};const b=class{constructor(e){t(this,e),this.phonevalidationerror=i(this,"phonevalidationerror",7),this.labelPosition=void 0,this.computedLabelPosition="above",this.disabled=void 0,this.required=!1,this.hasError=!1,this.hasInternalError=!1,this.hasHelp=!1}listenForInternalError(t){this.hasInternalError=t.detail,this.watchValue(this.hasInternalError),this.phonevalidationerror.emit(this.hasInternalError)}watchValue(t){const i=this.root.querySelector("gux-phone-input-beta");i&&(i.hasError=t)}onMutation(){this.hasError=m(this.root,"error"),this.hasHelp=m(this.root,"help")}async componentWillLoad(){this.getI18nValue=await r(this.root,c),this.setInput(),this.setLabel(),this.hasError=m(this.root,"error"),this.hasHelp=m(this.root,"help"),l(this.root,{variant:this.variant})}disconnectedCallback(){this.disabledObserver.disconnect(),this.requiredObserver.disconnect()}render(){return e(p,{labelPosition:this.computedLabelPosition},e(h,{position:this.computedLabelPosition,required:this.required},e("slot",{name:"label",onSlotchange:()=>this.setLabel()}),this.renderScreenReaderText(this.getI18nValue("required"),this.required),this.renderScreenReaderText(f(this.root,"error"),this.hasError)),e("div",{class:"gux-input-and-error-container"},e("div",{class:{"gux-input":!0,"gux-input-error":this.hasError}},e("div",{class:{"gux-input-container":!0,"gux-disabled":this.disabled}},e("slot",null))),e(d,{show:this.hasError},e("slot",{name:"error"})),e(d,{show:this.hasInternalError},e("span",null,this.getI18nValue("invalidPhoneNumber"))),e(u,{show:!this.hasError&&this.hasHelp},e("slot",{name:"help"}))))}renderScreenReaderText(t,i=!0){if(i)return e("gux-screen-reader-beta",null,t)}get variant(){return`phoneInput-${this.labelPosition?this.labelPosition.toLowerCase():"none"}`}setInput(){this.phoneInputElement=this.root.querySelector("gux-phone-input-beta"),this.disabled=this.phoneInputElement.disabled,this.required=this.phoneInputElement.required,this.disabledObserver=n(this.phoneInputElement,(t=>{this.disabled=t})),this.requiredObserver=a(this.phoneInputElement,(t=>{this.required=t})),g(this.root,this.phoneInputElement)}setLabel(){this.label=this.root.querySelector('label[slot="label"]'),this.computedLabelPosition=x(this.label,this.labelPosition)}get root(){return s(this)}static get watchers(){return{hasError:["watchValue"]}}};(function(t,i,e,s){var r,o=arguments.length,n=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,e,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(i,e,n):r(i,e))||n);o>3&&n&&Object.defineProperty(i,e,n)})([o({childList:!0,subtree:!0})],b.prototype,"onMutation",null),b.style=".gux-form-field-fieldset-container{min-width:0;padding:0;margin:var(--gux-form-field-fieldset-container-margin-top, 16px) 0 var(--gux-form-field-fieldset-container-margin-bottom, 16px) 0;border:none}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:flex-start;justify-content:flex-start;margin:4px 0;font-size:12px;line-height:20px;color:#2e394c}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;align-self:auto;order:0;min-width:16px;min-height:16px;margin:2px 4px 0 0;color:#ea0b0b}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-legend-label{padding:0}.gux-form-field-legend-label.gux-required::after{font-size:12px;color:#ea0b0b;content:' *'}.gux-form-field-legend-label.gux-beside{position:relative;top:8px;float:left;width:fit-content;min-width:45px;margin-right:8px}.gux-form-field-legend-label.gux-above{margin-bottom:8px}.gux-form-field-legend-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}::slotted(label){font-family:Roboto, sans-serif;font-weight:400;font-weight:700;font-size:12px;line-height:16px}.gux-input-and-error-container{flex-grow:1}";export{b as gux_form_field_phone}