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
function watchInTemplate() {
    return {
        restrict: 'E',
        template: require('./watchInTemplate.html'),
        controller: 'WatchInTemplateController',
        controllerAs: 'controller',
        scope: {},
    };
}
angular.module(exports.moduleName, [])
    .controller('WatchInTemplateController', WatchInTemplateController)
    .directive('tsWatchInTemplate', watchInTemplate);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJblRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBRXBEO0lBQUE7SUFZQSxDQUFDO0lBUkEsc0JBQUksbURBQVk7YUFBaEI7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBaUIsS0FBYTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUxBO0lBTUYsZ0NBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVEO0lBQ0MsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixDQUFDO1FBQzNDLFVBQVUsRUFBRSwyQkFBMkI7UUFDdkMsWUFBWSxFQUFFLFlBQVk7UUFDMUIsS0FBSyxFQUFFLEVBQUU7S0FDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQVUsRUFBRSxFQUFFLENBQUM7S0FDNUIsVUFBVSxDQUFDLDJCQUEyQixFQUFFLHlCQUF5QixDQUFDO0tBQ2xFLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQyJ9