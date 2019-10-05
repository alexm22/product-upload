import HeroComponent from './hero.component';
import angular from 'angular';

const HeroModule = angular
  .module('app.common.hero', [])
  .component('hero', HeroComponent).name;

export default HeroModule;
