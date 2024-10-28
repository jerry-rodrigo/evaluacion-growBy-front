import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Producto } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  products: any[] = [];
  product: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    estado: 'ACTIVO',
  };
  isEditMode = false;
  selectedProductId: number | null = null;
  clienteId: number | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
    this.clienteId = +this.route.snapshot.paramMap.get('clienteId')!;
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onSubmit(): void {
    if (this.isEditMode && this.selectedProductId !== null) {
      this.productService.updateProduct(this.selectedProductId, this.product).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar el producto:', error);
          alert('Error al actualizar el producto: ' + error.message);
          return of(null);
        })
      ).subscribe(() => {
        this.loadProducts();
        this.resetForm();
      });
    } else {
      this.productService.addProduct(this.product).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al agregar el producto:', error);
          alert('Error al agregar el producto: ' + error.message);
          return of(null);
        })
      ).subscribe((nuevoProducto) => {
        if (nuevoProducto) {
          alert('Producto agregado con éxito!');
          this.loadProducts();
          this.resetForm();
        } else {
          alert('No se pudo agregar el producto.');
        }
      });
    }
  }
  

  editProduct(product: Producto): void {
    this.product = { ...product };
    this.isEditMode = true;
    this.selectedProductId = product.id !== undefined ? product.id : null;
  }

  resetForm(): void {
    this.product = {
      nombre: '',
      descripcion: '',
      precio: 0,
      estado: 'ACTIVO',
    };
    this.isEditMode = false;
    this.selectedProductId = null;
  }

  eliminarProducto(productId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.deleteProduct(productId).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al eliminar el producto:', error);
          alert('Error al eliminar el producto: ' + error.message);
          return of(null);
        })
      ).subscribe(() => {
        alert('Producto eliminado con éxito!');
        this.loadProducts();
      });
    }
  }
}
