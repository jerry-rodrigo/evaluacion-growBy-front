import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ClienteService } from './cliente.service';
import { OrdenService } from './orden.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private clienteService: ClienteService,
    private ordenService: OrdenService,
    private productService: ProductService
  ) {}

  getDashboardData(): Observable<{ totalClientes: number; totalOrdenes: number; totalProductos: number }> {
    return forkJoin({
      totalClientes: this.clienteService.countClientes(),
      totalOrdenes: this.ordenService.countOrdenes(),
      totalProductos: this.productService.countProducts(),
    });
  }
}
