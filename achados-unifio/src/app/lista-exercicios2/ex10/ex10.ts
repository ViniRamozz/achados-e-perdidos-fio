import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  produtos: Produto[] = [
    { id: 1, nome: 'Cabo HDMI', preco: 50.00, quantidade: 0, promocao: false },
    { id: 2, nome: 'Teclado', preco: 1000.00, quantidade: 5, promocao: true },
    { id: 3, nome: 'Monitor', preco: 1500.00, quantidade: 2, promocao: false },
    { id: 4, nome: 'Mouse', preco: 600.00, quantidade: 10, promocao: true },
    { id: 5, nome: 'Webcam', preco: 300.00, quantidade: 4, promocao: false },
    { id: 6, nome: 'Headset', preco: 200.00, quantidade: 3, promocao: false }
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }
}
