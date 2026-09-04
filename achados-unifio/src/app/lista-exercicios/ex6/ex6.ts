import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  quantidade: number = 0;

  incrementar(): void {
    this.quantidade = this.quantidade + 1;
  }

  decrementar(): void {
    if (this.quantidade > 0) {
      this.quantidade = this.quantidade - 1;
    }
  }
}
