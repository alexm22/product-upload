import ProductsController from './products.controller';
import { IComponentOptions } from 'angular';
import Template from './products.html';

const ProductsComponent: IComponentOptions = {
  bindings: {},
  controller: ProductsController,
  template: Template
};

export default ProductsComponent;
