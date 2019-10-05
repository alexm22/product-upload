import { IController } from 'angular';

class HeroController implements IController {
  title: string;
  subtitle: string;

  $onInit() {}
  constructor() {
    this.title = 'Product uploader';
    this.subtitle = 'the subtitle for the hero';
  }
}

export default HeroController;
