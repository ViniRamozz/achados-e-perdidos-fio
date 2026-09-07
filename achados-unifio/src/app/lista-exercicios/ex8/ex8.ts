import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
  produto: string = 'Mouse Gamer';
  preco: number = 150;
  quantidade: number = 2;

  calcularTotal(): number {
    return this.preco * this.quantidade;
  }
}
