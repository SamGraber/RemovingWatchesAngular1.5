import * as angular from 'angular';

export const moduleName: string = 'watchInTemplate';

class WatchInTemplateController {
	watchedValue: number;
	doubledValue: number;
	
	static $inject: string[] = ['$scope'];
	constructor($scope: angular.IScope) {
		$scope.$watch('controller.watchedValue', (value: number): void => {
			this.doubledValue = this.watchedValue * 2;
		});
	}
}

function watchInTemplate(): angular.IDirective {
	return {
		restrict: 'E',
		template: require('./watchInTemplate.html'),
		controller: 'WatchInTemplateController',
		controllerAs: 'controller',
		scope: {},
	};
}

angular.module(moduleName, [])
	.controller('WatchInTemplateController', WatchInTemplateController)
	.directive('tsWatchInTemplate', watchInTemplate);
