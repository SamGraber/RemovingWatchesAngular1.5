import * as angular from 'angular';

import { moduleName as watchInTemplateModule } from './watchInTemplate/watchInTemplate';
import { moduleName as watchInBindingsModule } from './watchInBindings/watchInBindings';
import { moduleName as watchInServiceModule } from './watchInService/watchInService';

angular.module('app', [watchInTemplateModule, watchInBindingsModule, watchInServiceModule]);

angular.bootstrap(document, ['app']);