import { Injectable } from '@angular/core';

export interface TarefaObjeto {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Tarefa {
  private tarefas: TarefaObjeto[] = [];
  private proximoId = 1;

  listar(): TarefaObjeto[]{
    return this.tarefas;
   };

   adicionar(t: TarefaObjeto): void {
    this.tarefas.push(t);
   }
    remover(id: number): void {
      const i = this.tarefas.findIndex(t => t.id === id);
      if (i >= 0) this.tarefas.splice(i, 1);
    }
     marcarConcluida(id: number): void {
    const tarefa = this.tarefas.find(t =>t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
    }
   }

}

