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
    function WatchInBindingsChildController() {
    }
    WatchInBindingsChildController.prototype.$onChanges = function (changes) {
        if (changes.binding) {
            this.doubledValue = changes.binding.currentValue * 2;
        }
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJbkJpbmRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJbkJpbmRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBRXBEO0lBQUE7SUFFQSxDQUFDO0lBQUQsc0NBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVEO0lBQ0MsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUNsQyxVQUFVLEVBQUUsaUNBQWlDO1FBQzdDLFlBQVksRUFBRSxZQUFZO1FBQzFCLEtBQUssRUFBRSxFQUFFO0tBQ1QsQ0FBQztBQUNILENBQUM7QUFFRDtJQUFBO0lBU0EsQ0FBQztJQUxBLG1EQUFVLEdBQVYsVUFBVyxPQUFZO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDRixDQUFDO0lBQ0YscUNBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQUVEO0lBQ0MsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNqQyxVQUFVLEVBQUUsZ0NBQWdDO1FBQzVDLFlBQVksRUFBRSxZQUFZO1FBQzFCLEtBQUssRUFBRSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUU7WUFDakIsT0FBTyxFQUFFLEdBQUc7U0FDWjtLQUNELENBQUM7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBVSxFQUFFLEVBQUUsQ0FBQztLQUM1QixVQUFVLENBQUMsaUNBQWlDLEVBQUUsK0JBQStCLENBQUM7S0FDOUUsU0FBUyxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO0tBQ3JELFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSw4QkFBOEIsQ0FBQztLQUM1RSxTQUFTLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyJ9