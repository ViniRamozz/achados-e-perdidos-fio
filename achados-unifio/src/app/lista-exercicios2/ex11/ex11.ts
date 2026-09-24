import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150.00, quantidade: 5 },
    { id: 2, nome: 'Mouse', preco: 80.00, quantidade: 10 },
    { id: 3, nome: 'Monitor', preco: 900.00, quantidade: 2 },
    { id: 4, nome: 'Gabinete', preco: 300.00, quantidade: 0 },
    { id: 5, nome: 'Fone', preco: 120.00, quantidade: 8 }
  ];

  alternarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}
