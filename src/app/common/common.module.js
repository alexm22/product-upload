import angular from 'angular';
import HeroModule from './hero/hero.module';

const CommonModule = angular.module('app.common', [HeroModule]).name;

export default CommonModule;
