import { ListboxOptionElement } from './options/option-types';
export declare function getListOptions(list: HTMLGuxListboxElement): ListboxOptionElement[];
export declare function getSearchOption(list: HTMLGuxListboxElement, searchString: string): ListboxOptionElement;
export declare function clearActiveOptions(list: HTMLGuxListboxElement): void;
export declare function setInitialActiveOption(list: HTMLGuxListboxElement): void;
export declare function hasPreviousOption(list: HTMLGuxListboxElement): boolean;
export declare function hasNextOption(list: HTMLGuxListboxElement): boolean;
export declare function setFirstOptionActive(list: HTMLGuxListboxElement): void;
export declare function setNextOptionActive(list: HTMLGuxListboxElement): void;
export declare function setPreviousOptionActive(list: HTMLGuxListboxElement): void;
export declare function setLastOptionActive(list: HTMLGuxListboxElement): void;
export declare function actOnActiveOption(list: HTMLGuxListboxElement, handler: (value: string) => void): void;
export declare function onClickedOption(option: ListboxOptionElement, handler: (value: string) => void): void;
export declare function goToOption(list: HTMLGuxListboxElement, letter: string): void;
export declare function matchOption(option: ListboxOptionElement, matchString: string): boolean;