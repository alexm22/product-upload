import angular from 'angular';
import ProductsModule from './products/products.module';
import ProductModule from './product/product.module';
import AddProductModule from './addProduct/addProduct.module';

const ComponentsModule = angular.module('app.components', [
  ProductsModule,
  ProductModule,
  AddProductModule
]).name;

export default ComponentsModule;
