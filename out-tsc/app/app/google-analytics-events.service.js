var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var GoogleAnalyticsEventsService = /** @class */ (function () {
    function GoogleAnalyticsEventsService() {
    }
    GoogleAnalyticsEventsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    GoogleAnalyticsEventsService = __decorate([
        Injectable()
    ], GoogleAnalyticsEventsService);
    return GoogleAnalyticsEventsService;
}());
export { GoogleAnalyticsEventsService };
//# sourceMappingURL=google-analytics-events.service.js.map