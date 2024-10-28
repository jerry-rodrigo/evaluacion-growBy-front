import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenListComponent } from './orden-list.component';

@NgModule({
  declarations: [
    OrdenListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OrdenListComponent,
  ]
})
export class OrdenListModule { }
