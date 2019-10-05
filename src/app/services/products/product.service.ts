import { ProductItem } from '../../components/products/models/productItem';

export class ProductService {
  users = ['asd', 'asdd', 'asdsa7'];
  productList: ProductItem[] = [];

  getProducts() {
    this.productList.push({
      description: 'asdsa',
      title: 'mya'
    });
    return this.productList;
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
}
