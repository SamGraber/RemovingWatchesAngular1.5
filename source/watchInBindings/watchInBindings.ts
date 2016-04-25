import * as angular from 'angular';

export const moduleName: string = 'watchInBindings';

class WatchInBindingsParentController {
	watchedValue: number;
}

function watchInBindingsParent(): angular.IDirective {
	return {
		restrict: 'E',
		template: require('./parent.html'),
		controller: 'WatchInBindingsParentController',
		controllerAs: 'controller',
		scope: {},
	};
}

class WatchInBindingsChildController {
	binding: number;
	doubledValue: number;
	
	static $inject: string[] = ['$scope'];
	constructor($scope: angular.IScope) {
		$scope.$watch('controller.binding', (value: number): void => {
			this.doubledValue = value * 2;
		});
	}
}

function watchInBindingsChild(): angular.IDirective {
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

angular.module(moduleName, [])
	.controller('WatchInBindingsParentController', WatchInBindingsParentController)
	.directive('tsWatchInBindings', watchInBindingsParent)
	.controller('WatchInBindingsChildController', WatchInBindingsChildController)
	.directive('tsWatchInBindingsChild', watchInBindingsChild);
