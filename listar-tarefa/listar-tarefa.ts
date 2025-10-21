import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa, TarefaObjeto } from '../services/tarefa';
@Component({
  selector: 'app-listar-tarefa',
  imports: [CommonModule],
  templateUrl: './listar-tarefa.html',
  styleUrl: './listar-tarefa.css'
})

export class ListarTarefa {
tarefas: TarefaObjeto[] = [];

constructor(private tarefaService: Tarefa){
  this.tarefas = this.tarefaService.listar();
}
remover(id: number): void{
  this.tarefaService.remover(id);
}
marcarConcluida(id:number): void {
  this.tarefaService.marcarConcluida(id);
}
}
