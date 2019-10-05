import angular from 'angular';
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import ProductsComponent from './products.component';

// set seperate config file so that angular can detect state and router providers //

const conf = [
  '$stateProvider',
  '$urlRouterProvider',
  ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
    // set default state for products //
    $stateProvider.state('products', {
      url: '/products',
      component: 'products'
    });
    // if no url is defined default to products //
    $urlRouterProvider.otherwise('/products');
  }
];

const ProductsModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .config(conf).name;

export default ProductsModule;
