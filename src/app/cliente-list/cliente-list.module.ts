import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list.component';

@NgModule({
  declarations: [
    ClienteListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ClienteListComponent,
  ]
})
export class ClienteListModule { }
