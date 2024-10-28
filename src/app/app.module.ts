import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListModule } from './cliente-list/cliente-list.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListModule } from './product-list/product-list.module';
import { OrdenFormComponent } from './orden-form/orden-form.component';
import { OrdenListModule } from './orden-list/orden-list.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ProductFormComponent,
    OrdenFormComponent,
    DashboardComponent ,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    OrdenListModule,
    ClienteListModule,
    ProductListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
