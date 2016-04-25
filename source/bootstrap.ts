import * as angular from 'angular';

import { moduleName as watchInTemplateModule } from './watchInTemplate/watchInTemplate';
import { moduleName as watchInBindingsModule } from './watchInBindings/watchInBindings';

angular.module('app', [watchInTemplateModule, watchInBindingsModule]);

angular.bootstrap(document, ['app']);