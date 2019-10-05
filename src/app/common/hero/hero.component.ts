import HeroController from './hero.controller';
import { IComponentOptions } from 'angular';
import Template from './hero.html';

const HeroComponent: IComponentOptions = {
  bindings: {},
  controller: HeroController,
  template: Template
};

export default HeroComponent;
