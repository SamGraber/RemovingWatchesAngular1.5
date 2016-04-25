"use strict";
var angular = require('angular');
exports.moduleName = 'watchInBindings';
var WatchInBindingsParentController = (function () {
    function WatchInBindingsParentController() {
    }
    return WatchInBindingsParentController;
}());
var watchInBindingsParent = {
    template: require('./parent.html'),
    controller: 'WatchInBindingsParentController',
    controllerAs: 'controller',
};
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
var watchInBindingsChild = {
    template: require('./child.html'),
    controller: 'WatchInBindingsChildController',
    controllerAs: 'controller',
    bindings: {
        binding: '<',
    },
};
angular.module(exports.moduleName, [])
    .controller('WatchInBindingsParentController', WatchInBindingsParentController)
    .component('tsWatchInBindings', watchInBindingsParent)
    .controller('WatchInBindingsChildController', WatchInBindingsChildController)
    .component('tsWatchInBindingsChild', watchInBindingsChild);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJbkJpbmRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJbkJpbmRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBV3BEO0lBQUE7SUFFQSxDQUFDO0lBQUQsc0NBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVELElBQU0scUJBQXFCLEdBQTRCO0lBQ3RELFFBQVEsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDO0lBQ2xDLFVBQVUsRUFBRSxpQ0FBaUM7SUFDN0MsWUFBWSxFQUFFLFlBQVk7Q0FDMUIsQ0FBQztBQUVGO0lBQUE7SUFTQSxDQUFDO0lBTEEsbURBQVUsR0FBVixVQUFXLE9BQXdCO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDRixDQUFDO0lBQ0YscUNBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQUVELElBQU0sb0JBQW9CLEdBQThCO0lBQ3ZELFFBQVEsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQ2pDLFVBQVUsRUFBRSxnQ0FBZ0M7SUFDNUMsWUFBWSxFQUFFLFlBQVk7SUFDMUIsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEdBQUc7S0FDWjtDQUNELENBQUM7QUFFRixPQUFPLENBQUMsTUFBTSxDQUFDLGtCQUFVLEVBQUUsRUFBRSxDQUFDO0tBQzVCLFVBQVUsQ0FBQyxpQ0FBaUMsRUFBRSwrQkFBK0IsQ0FBQztLQUM5RSxTQUFTLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7S0FDckQsVUFBVSxDQUFDLGdDQUFnQyxFQUFFLDhCQUE4QixDQUFDO0tBQzVFLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDIn0=