"use strict";
var angular = require('angular');
exports.moduleName = 'watchInBindings';
var WatchInBindingsParentController = (function () {
    function WatchInBindingsParentController() {
    }
    return WatchInBindingsParentController;
}());
function watchInBindingsParent() {
    return {
        restrict: 'E',
        template: require('./parent.html'),
        controller: 'WatchInBindingsParentController',
        controllerAs: 'controller',
        scope: {},
    };
}
var WatchInBindingsChildController = (function () {
    function WatchInBindingsChildController($scope) {
        var _this = this;
        $scope.$watch('controller.binding', function (value) {
            _this.doubledValue = value * 2;
        });
    }
    WatchInBindingsChildController.$inject = ['$scope'];
    return WatchInBindingsChildController;
}());
function watchInBindingsChild() {
    return {
        restrict: 'E',
        template: require('./child.html'),
        controller: 'WatchInBindingsChildController',
        controllerAs: 'controller',
        scope: {},
        bindToController: {
            binding: '<',
        },
    };
}
angular.module(exports.moduleName, [])
    .controller('WatchInBindingsParentController', WatchInBindingsParentController)
    .directive('tsWatchInBindings', watchInBindingsParent)
    .controller('WatchInBindingsChildController', WatchInBindingsChildController)
    .directive('tsWatchInBindingsChild', watchInBindingsChild);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJbkJpbmRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJbkJpbmRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBRXBEO0lBQUE7SUFFQSxDQUFDO0lBQUQsc0NBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVEO0lBQ0MsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUNsQyxVQUFVLEVBQUUsaUNBQWlDO1FBQzdDLFlBQVksRUFBRSxZQUFZO1FBQzFCLEtBQUssRUFBRSxFQUFFO0tBQ1QsQ0FBQztBQUNILENBQUM7QUFFRDtJQUtDLHdDQUFZLE1BQXNCO1FBTG5DLGlCQVVDO1FBSkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLEtBQWE7WUFDakQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUxNLHNDQUFPLEdBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQU12QyxxQ0FBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBRUQ7SUFDQyxNQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2pDLFVBQVUsRUFBRSxnQ0FBZ0M7UUFDNUMsWUFBWSxFQUFFLFlBQVk7UUFDMUIsS0FBSyxFQUFFLEVBQUU7UUFDVCxnQkFBZ0IsRUFBRTtZQUNqQixPQUFPLEVBQUUsR0FBRztTQUNaO0tBQ0QsQ0FBQztBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFVLEVBQUUsRUFBRSxDQUFDO0tBQzVCLFVBQVUsQ0FBQyxpQ0FBaUMsRUFBRSwrQkFBK0IsQ0FBQztLQUM5RSxTQUFTLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7S0FDckQsVUFBVSxDQUFDLGdDQUFnQyxFQUFFLDhCQUE4QixDQUFDO0tBQzVFLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDIn0=