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

const watchInTemplate: angular.IComponentOptions = {
	template: require('./watchInTemplate.html'),
	controller: 'WatchInTemplateController',
	controllerAs: 'controller',
};

angular.module(moduleName, [])
	.controller('WatchInTemplateController', WatchInTemplateController)
	.component('tsWatchInTemplate', watchInTemplate);
