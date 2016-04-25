import * as angular from 'angular';

import { moduleName as watchInTemplateModule } from './watchInTemplate/watchInTemplate';

angular.module('app', [watchInTemplateModule]);

angular.bootstrap(document, ['app']);