import ProductController from './product.controller';
import { IComponentOptions } from 'angular';
import Template from './product.html';

const ProductComponent: IComponentOptions = {
  bindings: {
    products: '<'
  },
  controller: ProductController,
  template: Template
};

export default ProductComponent;
