import { GuxDatepickerIntervalRange } from './gux-datepicker.types';
export declare function getCalendarLabels(labelString: string, mode: string, defaultLabels: string[]): string[];
export declare function isOutOfBoundsDate(value: Date, min: Date, max: Date): boolean;
export declare function getClampedMonthValue(unclampedMonthValue: number): number;
export declare function incrementDay(delta: number, focusedDateValue: Date): Date;
export declare function incrementMonth(delta: number, focusedDateValue: Date): Date;
export declare function incrementYear(delta: number, focusedDateValue: Date): Date;
export declare function getFormattedDay(date: Date): string;
export declare function getFormattedMonth(date: Date): string;
export declare function getFormattedYear(date: Date, yearFormat: string): string;
export declare function getFormattedDate(date: Date, format: string): string;
export declare function getIntervalLetter(format: string, index: number): string;
export declare function getFormatSeparator(format: string): string;
export declare function getPreviousIntervalRange(format: string, currentIntervalRange: GuxDatepickerIntervalRange): GuxDatepickerIntervalRange;
export declare function getNextIntervalRange(format: string, currentIntervalRange: GuxDatepickerIntervalRange): GuxDatepickerIntervalRange;
export declare function getIntervalOrder(format: string): string[];
export declare function getIntervalRange(format: string, intervalLetter: string): GuxDatepickerIntervalRange;