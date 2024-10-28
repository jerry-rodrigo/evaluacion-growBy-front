import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
    cliente: Cliente = { id: 0, nombre: '', email: '', telefono: '' };
    isEditMode: boolean = false;
    errorMessage: string | null = null;
    successMessage: string | null = null;

    constructor(
        private clienteService: ClienteService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const clienteId = this.route.snapshot.paramMap.get('id');
        if (clienteId) {
            this.isEditMode = true;
            this.clienteService.getClienteById(+clienteId).subscribe((data) => {
                this.cliente = data;
            },
            error => {
                this.errorMessage = 'Error al cargar el cliente';});
        }
    }

    onSubmit(): void {
        this.errorMessage = null;
        this.successMessage = null;

        if (this.isEditMode) {
            this.clienteService.updateCliente(this.cliente.id!, this.cliente).subscribe(
                () => {
                    this.successMessage = 'Cliente actualizado con éxito';
                    this.router.navigate(['/clientes']);
                },
                error => {
                    this.errorMessage = 'Error al actualizar el cliente';
                }
            );
        } else {
            this.clienteService.createCliente(this.cliente).subscribe(
                (nuevoCliente) => {
                    this.successMessage = 'Cliente creado con éxito';
                    this.router.navigate(['/productos/nuevo', nuevoCliente.id]);
                },
                error => {
                    this.errorMessage = 'Error al crear el cliente';
                }
            );
        }
    }

    navigateToDashboard() {
        this.router.navigate(['/dashboard']);
      }
}
