import { IController } from 'angular';
import { ProductItem } from './models/productItem';
import { ProductService } from '../../services/products/product.service';

class ProductsController implements IController {
  static $inject = ['ProductService'];

  $onInit() {}
  products: Array<ProductItem>;
  constructor(private productService: ProductService) {
    this.productService = productService;
    console.log(this.productService.productList);
  }
}

export default ProductsController;
