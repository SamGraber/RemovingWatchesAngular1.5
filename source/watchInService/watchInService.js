"use strict";
var angular = require('angular');
var Rx = require('rx');
exports.moduleName = 'watchInService';
var WatchedService = (function () {
    function WatchedService() {
        this.watchedValueObservable = new Rx.Subject();
    }
    Object.defineProperty(WatchedService.prototype, "watchedValue", {
        get: function () {
            return this._watchedValue;
        },
        set: function (value) {
            this._watchedValue = value;
            this.watchedValueObservable.onNext(value);
        },
        enumerable: true,
        configurable: true
    });
    return WatchedService;
}());
var ServiceProviderController = (function () {
    function ServiceProviderController(watchedService) {
        this.watchedService = watchedService;
    }
    ServiceProviderController.$inject = ['watchedService'];
    return ServiceProviderController;
}());
var serviceProvider = {
    template: require('./serviceProvider.html'),
    controller: 'ServiceProviderController',
    controllerAs: 'controller',
};
var WatchInServiceController = (function () {
    function WatchInServiceController(watchedService) {
        var _this = this;
        this.watchedService = watchedService;
        watchedService.watchedValueObservable.subscribe(function (value) {
            _this.doubledValue = value * 2;
        });
    }
    WatchInServiceController.$inject = ['watchedService'];
    return WatchInServiceController;
}());
var watchInService = {
    template: require('./watchInService.html'),
    controller: 'WatchInServiceController',
    controllerAs: 'controller',
};
angular.module(exports.moduleName, [])
    .controller('WatchInServiceController', WatchInServiceController)
    .component('tsWatchInService', watchInService)
    .service('watchedService', WatchedService)
    .controller('ServiceProviderController', ServiceProviderController)
    .component('tsServiceProvider', serviceProvider);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJblNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YXRjaEluU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxFQUFFLFdBQU0sSUFBSSxDQUFDLENBQUE7QUFFWixrQkFBVSxHQUFXLGdCQUFnQixDQUFDO0FBRW5EO0lBYUM7UUFDQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQVhELHNCQUFJLHdDQUFZO2FBQWhCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWlCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FMQTtJQVVGLHFCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQUVEO0lBRUMsbUNBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFEOUMsaUNBQU8sR0FBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFL0MsZ0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUVELElBQU0sZUFBZSxHQUE4QjtJQUNsRCxRQUFRLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0lBQzNDLFVBQVUsRUFBRSwyQkFBMkI7SUFDdkMsWUFBWSxFQUFFLFlBQVk7Q0FDMUIsQ0FBQztBQUVGO0lBSUMsa0NBQW1CLGNBQThCO1FBSmxELGlCQVNDO1FBTG1CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNoRCxjQUFjLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBYTtZQUM3RCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBTE0sZ0NBQU8sR0FBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFNL0MsK0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQUVELElBQU0sY0FBYyxHQUE4QjtJQUNqRCxRQUFRLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0lBQzFDLFVBQVUsRUFBRSwwQkFBMEI7SUFDdEMsWUFBWSxFQUFFLFlBQVk7Q0FDMUIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQVUsRUFBRSxFQUFFLENBQUM7S0FDNUIsVUFBVSxDQUFDLDBCQUEwQixFQUFFLHdCQUF3QixDQUFDO0tBQ2hFLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUM7S0FDN0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztLQUN6QyxVQUFVLENBQUMsMkJBQTJCLEVBQUUseUJBQXlCLENBQUM7S0FDbEUsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDIn0=