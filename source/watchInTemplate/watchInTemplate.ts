import * as angular from 'angular';

export const moduleName: string = 'watchInTemplate';

class WatchInTemplateController {
	private _watchedValue: number;
	doubledValue: number;
	
	get watchedValue(): number {
		return this._watchedValue;
	}
	
	set watchedValue(value: number) {
		this._watchedValue = value;
		this.doubledValue = this._watchedValue * 2;
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
