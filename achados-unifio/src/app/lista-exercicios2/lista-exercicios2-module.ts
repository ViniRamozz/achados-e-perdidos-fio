import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercicios2RoutingModule } from './lista-exercicios2-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, ListaExercicios2RoutingModule],
})
export class ListaExercicios2Module {}
