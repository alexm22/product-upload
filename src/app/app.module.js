import './app.scss';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import appComponent from './app.component';
import CommonModule from './common/common.module';
import ComponentsModule from './components/components.module';
import ServicesModule from './services/services.module';
import 'bulma/bulma.sass';

const mainApp = angular.module('app', [
  // load ui router first //
  uiRouter,
  CommonModule,
  ComponentsModule,
  ServicesModule
]);
mainApp.component('app', appComponent);
