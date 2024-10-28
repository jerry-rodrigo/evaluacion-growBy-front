import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrdenFormComponent } from './orden-form/orden-form.component';
import { OrdenListComponent } from './orden-list/orden-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  
  // Rutas para Clientes
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/crear', component: ClienteFormComponent },
  { path: 'clientes/editar/:id', component: ClienteFormComponent },

  // Rutas para Órdenes
  { path: 'ordenes', component: OrdenListComponent },
  { path: 'ordenes/crear', component: OrdenFormComponent },
  { path: 'ordenes/editar/:id', component: OrdenFormComponent },

  { path: 'productos', component: OrdenListComponent },
  { path: 'productos/crear', component: ProductFormComponent },
  { path: 'productos/editar/:id', component: ProductFormComponent },

  // Redirección por defecto
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },

  // Ruta para manejar errores 404
  { path: '**', redirectTo: '/clientes' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
