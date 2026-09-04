import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  templateUrl: './ex2.html',
  styleUrl: './ex2.scss',
})
export class Ex2 {
  produto: string = 'Teclado';
  preco: number = 150;
  quantidade: number = 3;
}
