import { Pipe } from '@angular/core';
import { CalendarEventTitleFormatter } from '../providers/calendarEventTitle.provider';
export var CalendarEventTitle = (function () {
    function CalendarEventTitle(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitle.prototype.transform = function (event, titleType) {
        return this.calendarEventTitle[titleType](event);
    };
    CalendarEventTitle.decorators = [
        { type: Pipe, args: [{
                    name: 'calendarEventTitle'
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitle.ctorParameters = function () { return [
        { type: CalendarEventTitleFormatter, },
    ]; };
    return CalendarEventTitle;
}());
//# sourceMappingURL=calendarEventTitle.pipe.js.map