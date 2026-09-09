import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {
  nomeAluno: string = '';
  quantidadeDisciplinas: number = 1;
  mensagemConfirmacao: string = '';

  aumentar() {
    this.quantidadeDisciplinas++;
  }

  diminuir() {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula() {
    this.mensagemConfirmacao = 'Matrícula realizada com sucesso para ' + 
      this.nomeAluno + ' em ' + this.quantidadeDisciplinas + ' disciplina(s)!';
  }
}
