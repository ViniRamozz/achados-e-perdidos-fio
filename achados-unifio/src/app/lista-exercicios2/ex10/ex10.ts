import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150.00, quantidade: 5, promocao: true },
    { id: 2, nome: 'Mouse', preco: 80.00, quantidade: 10, promocao: false },
    { id: 3, nome: 'Monitor', preco: 900.00, quantidade: 2, promocao: true },
    { id: 4, nome: 'Gabinete', preco: 300.00, quantidade: 0, promocao: false },
    { id: 5, nome: 'Fone', preco: 120.00, quantidade: 8, promocao: false }
  ];

  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }
}
