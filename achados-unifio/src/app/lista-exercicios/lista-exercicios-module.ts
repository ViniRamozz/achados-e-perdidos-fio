import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExerciciosRoutingModule } from './lista-exercicios-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, ListaExerciciosRoutingModule],
})
export class ListaExerciciosModule {}
