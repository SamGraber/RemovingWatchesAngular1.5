"use strict";
var angular = require('angular');
exports.moduleName = 'watchInBindings';
var WatchInBindingsParentController = (function () {
    function WatchInBindingsParentController() {
        this.string = 'Another string';
    }
    WatchInBindingsParentController.prototype.handleChanges = function (value) {
        this.twoWayValue = value;
    };
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
    Object.defineProperty(WatchInBindingsChildController.prototype, "twoWayWrapper", {
        get: function () {
            return this.twoWay;
        },
        set: function (value) {
            this.twoWay = value;
            this.twoWayChange({ value: value });
        },
        enumerable: true,
        configurable: true
    });
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
            string: '<',
            interpolatedString: '<',
            twoWay: '<',
            twoWayChange: '&',
        },
    };
}
angular.module(exports.moduleName, [])
    .controller('WatchInBindingsParentController', WatchInBindingsParentController)
    .directive('tsWatchInBindings', watchInBindingsParent)
    .controller('WatchInBindingsChildController', WatchInBindingsChildController)
    .directive('tsWatchInBindingsChild', watchInBindingsChild);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJbkJpbmRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJbkJpbmRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBRXBEO0lBS0M7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ2hDLENBQUM7SUFFRCx1REFBYSxHQUFiLFVBQWMsS0FBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Ysc0NBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVEO0lBQ0MsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUNsQyxVQUFVLEVBQUUsaUNBQWlDO1FBQzdDLFlBQVksRUFBRSxZQUFZO1FBQzFCLEtBQUssRUFBRSxFQUFFO0tBQ1QsQ0FBQztBQUNILENBQUM7QUFFRDtJQWtCQyx3Q0FBWSxNQUFzQjtRQWxCbkMsaUJBdUJDO1FBSkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLEtBQWE7WUFDakQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWRELHNCQUFJLHlEQUFhO2FBQWpCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQWtCLEtBQWE7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUxBO0lBT00sc0NBQU8sR0FBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBTXZDLHFDQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQUVEO0lBQ0MsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNqQyxVQUFVLEVBQUUsZ0NBQWdDO1FBQzVDLFlBQVksRUFBRSxZQUFZO1FBQzFCLEtBQUssRUFBRSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUU7WUFDakIsT0FBTyxFQUFFLEdBQUc7WUFDWixNQUFNLEVBQUUsR0FBRztZQUNYLGtCQUFrQixFQUFFLEdBQUc7WUFDdkIsTUFBTSxFQUFFLEdBQUc7WUFDWCxZQUFZLEVBQUUsR0FBRztTQUNqQjtLQUNELENBQUM7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBVSxFQUFFLEVBQUUsQ0FBQztLQUM1QixVQUFVLENBQUMsaUNBQWlDLEVBQUUsK0JBQStCLENBQUM7S0FDOUUsU0FBUyxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO0tBQ3JELFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSw4QkFBOEIsQ0FBQztLQUM1RSxTQUFTLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyJ9