import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {
  nomeInput: string = '';
  quantidadeInput: number | null = null;
  mensagemErro: string = '';

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 10 }
  ];

  cadastrar(): void {
    if (!this.nomeInput.trim()) {
      this.mensagemErro = 'Preencha o nome do produto.';
      return;
    }

    if (this.quantidadeInput === null || this.quantidadeInput < 0) {
      this.mensagemErro = 'A quantidade deve ser maior ou igual a zero.';
      return;
    }

    const novoProduto: Produto = {
      id: Date.now(),
      nome: this.nomeInput,
      quantidade: this.quantidadeInput
    };

    this.produtos.push(novoProduto);
    this.nomeInput = '';
    this.quantidadeInput = null;
    this.mensagemErro = '';
  }

  excluir(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
