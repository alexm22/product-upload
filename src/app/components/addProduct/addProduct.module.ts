import angular from 'angular';
import ProductComponent from './addProduct.component';

const ProductModule = angular
  .module('app.components.addproduct', [])
  .component('addproduct', ProductComponent).name;

export default ProductModule;
