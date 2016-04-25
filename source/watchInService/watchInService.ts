import * as angular from 'angular';

export const moduleName: string = 'watchInService';

class WatchedService {
	watchedValue: number;
}

class ServiceProviderController {
	static $inject: string[] = ['watchedService'];
	constructor(public watchedService: WatchedService) {}
}

function serviceProvider(): angular.IDirective {
	return {
		restrict: 'E',
		template: require('./serviceProvider.html'),
		controller: 'ServiceProviderController',
		controllerAs: 'controller',
		scope: {},
	};
}

class WatchInServiceController {
	doubledValue: number;
	
	static $inject: string[] = ['$scope', 'watchedService'];
	constructor($scope: angular.IScope, public watchedService: WatchedService) {
		$scope.$watch('controller.watchedService.watchedValue', (value: number): void => {
			this.doubledValue = value * 2;
		});
	}
}

function watchInService(): angular.IDirective {
	return {
		restrict: 'E',
		template: require('./watchInService.html'),
		controller: 'WatchInServiceController',
		controllerAs: 'controller',
		scope: {},
	};
}

angular.module(moduleName, [])
	.controller('WatchInServiceController', WatchInServiceController)
	.directive('tsWatchInService', watchInService)
	.service('watchedService', WatchedService)
	.controller('ServiceProviderController', ServiceProviderController)
	.directive('tsServiceProvider', serviceProvider);
