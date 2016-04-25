import * as angular from 'angular';

export const moduleName: string = 'watchInBindings';

class WatchInBindingsParentController {
	watchedValue: number;
	twoWayValue: number;
	string: string;
	
	constructor() {
		this.string = 'Another string';
	}
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
	string: string;
	interpolatedString: string;
	twoWay: number;
	
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
			string: '<',
			interpolatedString: '<',
			twoWay: '=',
		},
	};
}

angular.module(moduleName, [])
	.controller('WatchInBindingsParentController', WatchInBindingsParentController)
	.directive('tsWatchInBindings', watchInBindingsParent)
	.controller('WatchInBindingsChildController', WatchInBindingsChildController)
	.directive('tsWatchInBindingsChild', watchInBindingsChild);
