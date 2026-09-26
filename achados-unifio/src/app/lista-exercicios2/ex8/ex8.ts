import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
  produtos: Produto[] = [
    {id: 2, nome: 'Teclado', preco: 1000.00, quantidade: 5},
    {id: 3, nome: 'Monitor', preco: 1500.00, quantidade: 2},
    {id: 4, nome: 'Mouse', preco: 600.00, quantidade: 10},
    {id: 5, nome: 'Webcam', preco: 300.00, quantidade: 4},
    {id: 6, nome: 'Headset', preco: 200.00, quantidade: 3}

  ];
}
