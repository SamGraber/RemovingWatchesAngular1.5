"use strict";
var angular = require('angular');
exports.moduleName = 'watchInTemplate';
var WatchInTemplateController = (function () {
    function WatchInTemplateController() {
    }
    Object.defineProperty(WatchInTemplateController.prototype, "watchedValue", {
        get: function () {
            return this._watchedValue;
        },
        set: function (value) {
            this._watchedValue = value;
            this.doubledValue = this._watchedValue * 2;
        },
        enumerable: true,
        configurable: true
    });
    return WatchInTemplateController;
}());
var watchInTemplate = {
    template: require('./watchInTemplate.html'),
    controller: 'WatchInTemplateController',
    controllerAs: 'controller',
};
angular.module(exports.moduleName, [])
    .controller('WatchInTemplateController', WatchInTemplateController)
    .component('tsWatchInTemplate', watchInTemplate);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJblRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBRXBEO0lBQUE7SUFZQSxDQUFDO0lBUkEsc0JBQUksbURBQVk7YUFBaEI7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBaUIsS0FBYTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUxBO0lBTUYsZ0NBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVELElBQU0sZUFBZSxHQUE4QjtJQUNsRCxRQUFRLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0lBQzNDLFVBQVUsRUFBRSwyQkFBMkI7SUFDdkMsWUFBWSxFQUFFLFlBQVk7Q0FDMUIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQVUsRUFBRSxFQUFFLENBQUM7S0FDNUIsVUFBVSxDQUFDLDJCQUEyQixFQUFFLHlCQUF5QixDQUFDO0tBQ2xFLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQyJ9