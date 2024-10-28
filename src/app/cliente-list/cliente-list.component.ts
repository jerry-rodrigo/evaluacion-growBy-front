import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private clienteService: ClienteService, private router: Router) {}

  navigateToCrearCliente() {
    this.router.navigate(['/clientes/crear']);
  }

  navigateToCrearProducto() {
    this.router.navigate(['/productos/crear']);
  }

  navigateToCrearOrden() {
      this.router.navigate(['/ordenes/crear']);
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
      this.successMessage = null;
    });
  }

  editCliente(id: number) {
    this.router.navigate(['/clientes/editar', id]);
  }

  deleteCliente(id: number | undefined) {
    if (id === undefined) {
      this.errorMessage = 'ID de cliente no válido.';
      return;
    }

    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.clienteService.deleteCliente(id).subscribe(
        response => {
          this.successMessage = 'Cliente eliminado con éxito.';
          this.loadClientes();
        },
        error => {
          this.errorMessage = error.error;
          this.successMessage = null;
        }
      );
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
