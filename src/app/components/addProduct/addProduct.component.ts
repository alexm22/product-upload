import ProductController from './addProduct.controller';
import { IComponentOptions } from 'angular';
import Template from './addProduct.html';

const ProductComponent: IComponentOptions = {
  bindings: {
    products: '<'
  },
  controller: ProductController,
  template: Template
};

export default ProductComponent;
