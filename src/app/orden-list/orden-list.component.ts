import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../services/orden.service';
import { Producto } from '../models/product.model';
import { Orden } from '../models/orden.model';
import { ProductService } from '../services/product.service';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-orden-list',
  templateUrl: './orden-list.component.html',
  styleUrls: ['./orden-list.component.css']
})
export class OrdenListComponent implements OnInit {
  ordenes: Orden[] = [];
  productos: Producto[] = [];
  clientes: Cliente[] = [];
  title: string = 'Lista de Órdenes';

  constructor(
    private ordenService: OrdenService,
    private productService: ProductService,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadOrdenes();
    this.loadProductos();
    this.loadClientes();
  }

  loadOrdenes(): void {
    this.ordenService.getAllOrdenes().subscribe((data) => {
      this.ordenes = data;
      console.log('Órdenes cargadas:', this.ordenes);

      this.ordenes.forEach(orden => {
        console.log(`Orden ID: ${orden.id}, Cliente ID: ${orden.cliente?.id}, Producto ID: ${orden.producto?.id}`);
      });
    });
  }

  loadProductos(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.productos = data;
      console.log('Productos cargados:', this.productos);
    });
  }

  loadClientes(): void {
    this.clienteService.getAllClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
      console.log('Clientes cargados:', this.clientes); 
    });
  }

  getProductoNombre(productoId: number | null): string {
    if (productoId === null) return 'Producto no encontrado';
    const producto = this.productos.find((p) => p.id === productoId);
    return producto ? producto.nombre : 'Producto no encontrado';
  }

  getClienteNombre(clienteId: number | null): string {
    if (clienteId === null) return 'Cliente no encontrado';
    const cliente = this.clientes.find((c) => c.id === clienteId);
    return cliente ? cliente.nombre : 'Cliente no encontrado';
  }

  eliminarOrden(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta orden?')) {
      this.ordenService.deleteOrden(id).subscribe(() => {
        this.loadOrdenes();
      });
    }
  }

  editarOrden(id: number): void {
    this.router.navigate(['/ordenes/editar', id]);
  }

  irAFormularioCliente(): void {
    this.router.navigate(['/clientes/crear']);
  }

  irAFormularioProducto(): void {
    this.router.navigate(['/productos/crear']);
  }

  irAFormularioOrden(): void {
    this.router.navigate(['/ordenes/crear']);
  }
}
