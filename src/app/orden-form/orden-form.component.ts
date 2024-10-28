import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../services/orden.service';
import { Orden } from '../models/orden.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { Producto } from '../models/product.model';
import { ClienteService } from '../services/cliente.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-orden-form',
  templateUrl: './orden-form.component.html',
  styleUrls: ['./orden-form.component.css']
})
export class OrdenFormComponent implements OnInit {
  orden: Orden = { cantidad: 0, total: 0, fechaOrden: new Date(), cliente: undefined, producto: undefined };
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  isEditMode: boolean = false;

  constructor(
    private ordenService: OrdenService,
    private clienteService: ClienteService,
    private productoService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadClientesAndProductos();
    const ordenId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!ordenId;

    if (this.isEditMode) {
      this.ordenService.getOrdenById(+ordenId!).subscribe((orden) => {
        this.orden = orden;
      });
    }
  }

  loadClientesAndProductos(): void {
    this.clienteService.getAllClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });

    this.productoService.getAllProducts().subscribe((productos) => {
      this.productos = productos;
    });
  }

  onSubmit(): void {
    const ordenData:Orden = {
      cantidad: this.orden.cantidad,
      total: this.orden.total,
      fechaOrden: this.orden.fechaOrden,
      clienteId: this.orden.cliente?.id,
      productoId: this.orden.producto?.id
    };

    if (this.isEditMode) {
      if (this.orden.id) {
        this.ordenService.updateOrden(this.orden.id, ordenData).subscribe(() => {
          this.router.navigate(['/ordenes']);
        });
      } else {
        console.error('ID de la orden es indefinido');
      }
    } else {
      this.ordenService.createOrden(ordenData).subscribe(() => {
        this.router.navigate(['/ordenes']);
      });
    }
  }
}
