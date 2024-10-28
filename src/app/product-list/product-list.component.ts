import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data: Producto[]) => {
      this.products = data;
    });
  }

  eliminarProducto(productId: number): void {
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
      this.productService.deleteProduct(productId).subscribe(() => {
        alert('Producto eliminado con éxito.');
        this.loadProducts();
      }, (error: any) => {
        alert('Error al eliminar el producto: ' + error.message);
      });
    }
  }
}
