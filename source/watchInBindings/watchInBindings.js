"use strict";
var angular = require('angular');
exports.moduleName = 'watchInBindings';
var WatchInBindingsParentController = (function () {
    function WatchInBindingsParentController() {
        this.string = 'Another string';
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
            string: '@',
            interpolatedString: '@',
            twoWay: '=',
        },
    };
}
angular.module(exports.moduleName, [])
    .controller('WatchInBindingsParentController', WatchInBindingsParentController)
    .directive('tsWatchInBindings', watchInBindingsParent)
    .controller('WatchInBindingsChildController', WatchInBindingsChildController)
    .directive('tsWatchInBindingsChild', watchInBindingsChild);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJbkJpbmRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJbkJpbmRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBRXBEO0lBS0M7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLENBQUM7SUFDRixzQ0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBRUQ7SUFDQyxNQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQ2xDLFVBQVUsRUFBRSxpQ0FBaUM7UUFDN0MsWUFBWSxFQUFFLFlBQVk7UUFDMUIsS0FBSyxFQUFFLEVBQUU7S0FDVCxDQUFDO0FBQ0gsQ0FBQztBQUVEO0lBUUMsd0NBQVksTUFBc0I7UUFSbkMsaUJBYUM7UUFKQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsS0FBYTtZQUNqRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBTE0sc0NBQU8sR0FBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBTXZDLHFDQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFFRDtJQUNDLE1BQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDakMsVUFBVSxFQUFFLGdDQUFnQztRQUM1QyxZQUFZLEVBQUUsWUFBWTtRQUMxQixLQUFLLEVBQUUsRUFBRTtRQUNULGdCQUFnQixFQUFFO1lBQ2pCLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLEdBQUc7WUFDWCxrQkFBa0IsRUFBRSxHQUFHO1lBQ3ZCLE1BQU0sRUFBRSxHQUFHO1NBQ1g7S0FDRCxDQUFDO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQVUsRUFBRSxFQUFFLENBQUM7S0FDNUIsVUFBVSxDQUFDLGlDQUFpQyxFQUFFLCtCQUErQixDQUFDO0tBQzlFLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztLQUNyRCxVQUFVLENBQUMsZ0NBQWdDLEVBQUUsOEJBQThCLENBQUM7S0FDNUUsU0FBUyxDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDLENBQUMifQ==