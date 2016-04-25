"use strict";
var angular = require('angular');
exports.moduleName = 'watchInTemplate';
var WatchInTemplateController = (function () {
    function WatchInTemplateController($scope) {
        var _this = this;
        $scope.$watch('controller.watchedValue', function (value) {
            _this.doubledValue = _this.watchedValue * 2;
        });
    }
    WatchInTemplateController.$inject = ['$scope'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hJblRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2F0Y2hJblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUV0QixrQkFBVSxHQUFXLGlCQUFpQixDQUFDO0FBRXBEO0lBS0MsbUNBQVksTUFBc0I7UUFMbkMsaUJBVUM7UUFKQyxNQUFNLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLFVBQUMsS0FBYTtZQUN0RCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUxNLGlDQUFPLEdBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQU12QyxnQ0FBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBRUQ7SUFDQyxNQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxPQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDM0MsVUFBVSxFQUFFLDJCQUEyQjtRQUN2QyxZQUFZLEVBQUUsWUFBWTtRQUMxQixLQUFLLEVBQUUsRUFBRTtLQUNULENBQUM7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBVSxFQUFFLEVBQUUsQ0FBQztLQUM1QixVQUFVLENBQUMsMkJBQTJCLEVBQUUseUJBQXlCLENBQUM7S0FDbEUsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDIn0=