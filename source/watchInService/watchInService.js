"use strict";
var angular = require('angular');
exports.moduleName = 'watchInService';
var WatchedService = (function () {
    function WatchedService() {
    }
    return WatchedService;
}());
var ServiceProviderController = (function () {
    function ServiceProviderController(watchedService) {
        this.watchedService = watchedService;
    }
    ServiceProviderController.$inject = ['watchedService'];
    return ServiceProviderController;
}());
function serviceProvider() {
    return {
        restrict: 'E',
        template: require('./serviceProvider.html'),
        controller: 'ServiceProviderController',
        controllerAs: 'controller',
        scope: {},
    };
}
var WatchInServiceController = (function () {
    function WatchInServiceController($scope, watchedService) {
        var _this = this;
        this.watchedService = watchedService;
        $scope.$watch('controller.watchedService.watchedValue', function (value) {
            _this.doubledValue = value * 2;
        });
    }
    WatchInServiceController.$inject = ['$scope', 'watchedService'];
    return WatchInServiceController;
}());
function watchInService() {
    return {
        restrict: 'E',
        template: require('./watchInService.html'),
        controller: 'WatchInServiceController',
        controllerAs: 'controller',
        scope: {},
    };
}
angular.module(exports.moduleName, [])
    .controller('WatchInServiceController', WatchInServiceController)
    .directive('tsWatchInService', watchInService)
    .service('watchedService', WatchedService)
    .controller('ServiceProviderController', ServiceProviderController)
    .directive('tsServiceProvider', serviceProvider);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJblNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YXRjaEluU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFdEIsa0JBQVUsR0FBVyxnQkFBZ0IsQ0FBQztBQUVuRDtJQUFBO0lBRUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRDtJQUVDLG1DQUFtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRDlDLGlDQUFPLEdBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRS9DLGdDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFFRDtJQUNDLE1BQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUMzQyxVQUFVLEVBQUUsMkJBQTJCO1FBQ3ZDLFlBQVksRUFBRSxZQUFZO1FBQzFCLEtBQUssRUFBRSxFQUFFO0tBQ1QsQ0FBQztBQUNILENBQUM7QUFFRDtJQUlDLGtDQUFZLE1BQXNCLEVBQVMsY0FBOEI7UUFKMUUsaUJBU0M7UUFMMkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0NBQXdDLEVBQUUsVUFBQyxLQUFhO1lBQ3JFLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFMTSxnQ0FBTyxHQUFhLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFNekQsK0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQUVEO0lBQ0MsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1FBQzFDLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsWUFBWSxFQUFFLFlBQVk7UUFDMUIsS0FBSyxFQUFFLEVBQUU7S0FDVCxDQUFDO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQVUsRUFBRSxFQUFFLENBQUM7S0FDNUIsVUFBVSxDQUFDLDBCQUEwQixFQUFFLHdCQUF3QixDQUFDO0tBQ2hFLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUM7S0FDN0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztLQUN6QyxVQUFVLENBQUMsMkJBQTJCLEVBQUUseUJBQXlCLENBQUM7S0FDbEUsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDIn0=