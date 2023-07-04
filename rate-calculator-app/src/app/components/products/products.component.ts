import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../common/services/product.service';
import { Product } from 'src/app/common/Inteface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error retrieving products:', error);
      }
    );
  }

  editProduct(product: Product): void {
    // Assuming you have an editProduct method in the ProductService
    this.productService.editProduct(product).subscribe(
      (updatedProduct: Product) => {
        // Update the corresponding product in the products array
        const index = this.products.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
          this.products[index] = updatedProduct;
        }
      },
      (error) => {
        console.error('Error editing product:', error);
      }
    );
  }

  deleteProduct(product: Product): void {
    // Assuming you have a deleteProduct method in the ProductService
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        // Remove the deleted product from the products array
        this.products = this.products.filter(p => p.id !== product.id);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
  
}
