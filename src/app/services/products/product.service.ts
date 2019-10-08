import { ProductItem } from '../../components/products/models/productItem';
import { IHttpProvider } from 'angular';

export class ProductService {
  $http: any;
  constructor($http: IHttpProvider) {
    this.$http = $http;
    this.getProducts();
  }
  productList: ProductItem[] = [];

  getProducts() {
    this.$http({
      method: 'GET',
      url: 'http://localhost:3000/api'
    })
      .then((res: any) => this.productList.push(res.data))
      .catch((error: any) => console.log(error));
  }

  async addProduct(product: ProductItem) {
    return this.productList.push(product);
  }

  uploadFile(file: any) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  addNewProduct(product: any) {
    this.$http
      .post('http://localhost:3000/api', product)
      .then((response: any) => {
        console.log('posted successfully');
      })
      .catch((response: any) => {
        console.error('error in posting');
      });
  }
}
