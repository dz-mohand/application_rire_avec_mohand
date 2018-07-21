import { PipeTransform } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { CalendarEventTitleFormatter } from '../providers/calendarEventTitle.provider';
export declare class CalendarEventTitle implements PipeTransform {
    private calendarEventTitle;
    constructor(calendarEventTitle: CalendarEventTitleFormatter);
    transform(event: CalendarEvent, titleType: string): string;
}
