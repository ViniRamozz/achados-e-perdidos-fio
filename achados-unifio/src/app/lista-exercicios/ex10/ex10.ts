import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  usuario: string = '';
  senha: string = '';

  mensagem: string = '';

  entrar(): void {
    if (this.usuario === 'admin' && this.senha === '1234') {
      this.mensagem = 'Login realizado com sucesso!';
    } else {
      this.mensagem = 'Usuário ou senha incorretos!';
    }
  }
}
