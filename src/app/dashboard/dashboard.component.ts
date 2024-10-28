import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errorMessage: string | null = null;
  totalClientes: number = 0;
  totalOrdenes: number = 0;
  totalProductos: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCounts();
  }

  private loadCounts() {
    this.http.get<number>('http://localhost:8080/api/clientes/count')
      .subscribe(count => {
        this.totalClientes = count;
      }, error => {
        console.error('Error al obtener el conteo de clientes', error);
      });

    this.http.get<number>('http://localhost:8080/api/ordenes/count')
      .subscribe(count => {
        this.totalOrdenes = count;
      }, error => {
        console.error('Error al obtener el conteo de órdenes', error);
      });

    this.http.get<number>('http://localhost:8080/api/productos/count')
      .subscribe(count => {
        this.totalProductos = count;
      }, error => {
        console.error('Error al obtener el conteo de productos', error);
      });
  }
}
