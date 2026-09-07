import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  nomeProduto: string = 'Teclado Mecânico';
  estoque: number = 5;

  aumentarEstoque(): void {
    this.estoque++;
  }

  diminuirEstoque(): void {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
