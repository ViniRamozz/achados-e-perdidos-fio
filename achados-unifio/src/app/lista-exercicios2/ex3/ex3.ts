import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  standalone: false,
  templateUrl: './ex3.html',
  styleUrl: './ex3.scss',
})
export class Ex3 {
  idade: number = 0;

  aumentarIdade(): void{
   this.idade++
  }

  diminuirIdade(): void{
    if (this.idade > 0){
      this.idade--
    }
  }
}
