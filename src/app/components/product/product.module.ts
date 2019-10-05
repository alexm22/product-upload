import angular from 'angular';
import ProductComponent from './product.component';

const ProductModule = angular
  .module('app.components.product', [])
  .component('product', ProductComponent).name;

export default ProductModule;
