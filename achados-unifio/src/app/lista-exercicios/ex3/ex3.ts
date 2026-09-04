import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  standalone: false,
  templateUrl: './ex3.html',
  styleUrl: './ex3.scss',
})
export class Ex3 {
  imagemProduto : String = 'https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/375586027/k664-rgb--pt-brown---7--jx7atv5nnf.png';
  descricaoImagem: String = 'Imagem promocional do produto';
}
