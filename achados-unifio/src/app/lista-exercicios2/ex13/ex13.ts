import { Component } from '@angular/core';

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss',
})
export class Ex13 {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar Angular', responsavel: 'Ana', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Comprar pão', responsavel: 'Bruno', prioridade: 'baixa', concluida: true },
    { id: 3, titulo: 'Limpar a casa', responsavel: 'Carla', prioridade: 'média', concluida: false },
    { id: 4, titulo: 'Pagar contas', responsavel: 'Daniel', prioridade: 'alta', concluida: true },
    { id: 5, titulo: 'Ler livro', responsavel: 'Eduarda', prioridade: 'baixa', concluida: false },
    { id: 6, titulo: 'Fazer exercícios', responsavel: 'Ana', prioridade: 'média', concluida: false }
  ];

  alternarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}
