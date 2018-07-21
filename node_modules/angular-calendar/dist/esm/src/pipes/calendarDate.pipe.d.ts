import { PipeTransform } from '@angular/core';
import { CalendarDateFormatter } from './../providers/calendarDateFormatter.provider';
export declare class CalendarDate implements PipeTransform {
    private dateFormatter;
    private locale;
    /**
     * @private
     */
    constructor(dateFormatter: CalendarDateFormatter, locale: string);
    /**
     * @private
     */
    transform(date: Date, method: string, locale?: string): string;
}
