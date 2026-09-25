import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  readonly listaInicial: string[] = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elena'];


  nomes: string[] = [...this.listaInicial];


  removerUltimo(): void {
    this.nomes.pop();
  }

  // 2. Limpa toda a lista
  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.listaInicial];
  }
}
