import * as angular from 'angular';

export const moduleName: string = 'watchInBindings';

interface IChangeObject<T> {
	currentValue: T;
	previousValue: T;
}

interface IBindingChanges {
	binding: IChangeObject<number>;
}

class WatchInBindingsParentController {
	watchedValue: number;
}

const watchInBindingsParent: angular.IComponentOptions {
	template: require('./parent.html'),
	controller: 'WatchInBindingsParentController',
	controllerAs: 'controller',
};

class WatchInBindingsChildController {
	binding: number;
	doubledValue: number;
	
	$onChanges(changes: IBindingChanges): void {
		if (changes.binding) {
			this.doubledValue = changes.binding.currentValue * 2;
		}
	}
}

const watchInBindingsChild: angular.IComponentOptions = {
	template: require('./child.html'),
	controller: 'WatchInBindingsChildController',
	controllerAs: 'controller',
	bindings: {
		binding: '<',	
	},
};

angular.module(moduleName, [])
	.controller('WatchInBindingsParentController', WatchInBindingsParentController)
	.component('tsWatchInBindings', watchInBindingsParent)
	.controller('WatchInBindingsChildController', WatchInBindingsChildController)
	.component('tsWatchInBindingsChild', watchInBindingsChild);
