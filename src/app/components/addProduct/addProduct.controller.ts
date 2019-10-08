import { IController } from 'angular';
import { ProductItem } from '../products/models/productItem';
import { IScope } from 'angular';
import { ProductService } from '../../services/products/product.service';

class ProductController implements IController {
  newProduct: ProductItem;
  $scope: any;
  products: any[] = [];
  hasSet: any;
  static $inject = ['$scope', 'ProductService'];
  testProduct: {};

  $onInit() {}
  constructor($scope: IScope, private productService: ProductService) {
    this.$scope = $scope;
    this.newProduct = {};
    this.productService = productService;

    this.testProduct = {
      title: 'item one',
      description: 'some description about this item',
      price: '300',
      quantity: '3'
    };
  }

  $apply() {}

  submitProduct(product: ProductItem) {
    this.productService.addNewProduct(product);

    const inputImage = (<HTMLInputElement>document.getElementById('file'))
      .files[0];
    const imagePromise = this.productService.uploadFile(inputImage);

    imagePromise.then(image => {
      // use scope apply to tell angular's digestive cycle //
      this.$scope.$apply(() => {
        console.log(this.newProduct.image)
        this.newProduct.image = image;
        this.productService.addProduct(product);
        this.reset();
      });
    });
    console.log(product);
  }

  reset(): any {
    return (this.newProduct = null);
  }
}

export default ProductController;
