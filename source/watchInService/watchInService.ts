import * as angular from 'angular';
import * as Rx from 'rx';

export const moduleName: string = 'watchInService';

class WatchedService {
	private _watchedValue: number;
	watchedValueObservable: Rx.Subject<number>;
	
	get watchedValue(): number {
		return this._watchedValue;
	}
	
	set watchedValue(value: number) {
		this._watchedValue = value;
		this.watchedValueObservable.onNext(value);
	}
	
	constructor() {
		this.watchedValueObservable = new Rx.Subject();
	}
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
	
	static $inject: string[] = ['watchedService'];
	constructor(public watchedService: WatchedService) {
		watchedService.watchedValueObservable.subscribe((value: number): void => {
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
