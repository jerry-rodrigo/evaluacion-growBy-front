import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from '../models/orden.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private apiUrl = 'http://localhost:8080/api/ordenes';

  constructor(private http: HttpClient) {}

  getAllOrdenes(): Observable<Orden[]> {
    return this.http.get<Orden[]>(this.apiUrl);
  }

  getOrdenById(id: number): Observable<Orden> {
    return this.http.get<Orden>(`${this.apiUrl}/${id}`);
  }
  
  getOrdenesByClienteId(clienteId: number): Observable<Orden[]> {
    return this.http.get<Orden[]>(`${this.apiUrl}/cliente/${clienteId}`);
  }

  createOrden(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(this.apiUrl, orden);
  }

  updateOrden(id: number, orden: Orden): Observable<Orden> {
    return this.http.put<Orden>(`${this.apiUrl}/${id}`, orden);
  }

  deleteOrden(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  countOrdenes(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }
}
