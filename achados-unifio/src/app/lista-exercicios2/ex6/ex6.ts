import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  listaInicial: string[] = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Eduarda'];
  nomes: string[] = [...this.listaInicial];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.listaInicial];
  }
}
