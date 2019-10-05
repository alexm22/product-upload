import angular from 'angular';
import {ProductService} from './products/product.service'

const ServicesModule = angular
  .module('app.services', [])
  .service('ProductService', ProductService).name;

export default ServicesModule;
