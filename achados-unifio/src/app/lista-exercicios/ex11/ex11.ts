import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  nome: string = 'Mouse Gamer';
  preco: number = 120.00;
  quantidade: number = 1;
  total: number = 120.00;
  mensagem: string = '';

  aumentar() {
    this.quantidade++;
    this.atualizarTotal();
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
      this.atualizarTotal();
    }
  }

  atualizarTotal() {
    this.total = this.quantidade * this.preco;
  }

  adicionar() {
    this.mensagem = 'Adicionado ao carrinho: ' + this.quantidade + 'x ' + this.nome;
  }
}
