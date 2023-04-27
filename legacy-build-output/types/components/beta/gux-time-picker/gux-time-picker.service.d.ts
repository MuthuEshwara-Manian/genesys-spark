import { GuxClockType, GuxMinuteInterval, GuxMinuteStep, GuxISOHourMinute } from './gux-time-picker.type';
export declare function getTimeDisplayValues(minuteInterval: GuxMinuteInterval, clockType: GuxClockType): GuxISOHourMinute[];
export declare function getLocaleClockType(root: HTMLElement): GuxClockType;
export declare function incrementHour(value: GuxISOHourMinute, delta: 1 | -1 | 12): GuxISOHourMinute;
export declare function incrementMinute(value: GuxISOHourMinute, delta: 1 | -1, step: GuxMinuteStep): GuxISOHourMinute;
export declare function getDisplayValue(value: GuxISOHourMinute, clockType: GuxClockType): GuxISOHourMinute;
export declare function getValue(displayValue: GuxISOHourMinute, clockType: GuxClockType, isAm: boolean): GuxISOHourMinute;
export declare function getHourDisplayValue(value: GuxISOHourMinute, clockType: GuxClockType): string;
export declare function getMinuteDisplayValue(value: GuxISOHourMinute): string;
export declare function isAm(value: GuxISOHourMinute): boolean;
export declare function getHoursPattern(clockType: GuxClockType): string;
export declare function getMinutesPattern(): string;
export declare function getValidValueHourChange(value: GuxISOHourMinute, clockType: GuxClockType, change: string, selectionStart: number, hourInputLength: number): GuxISOHourMinute;
export declare function getValidValueMinuteChange(value: GuxISOHourMinute, change: string, selectionStart: number): GuxISOHourMinute;