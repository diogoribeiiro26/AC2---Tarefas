import { Component } from '@angular/core';
import { Tarefa, TarefaObjeto } from '../services/tarefa';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css'
})
export class CadastrarTarefa {
id: number = 0;
titulo: string = '';
concluida: boolean =false;

constructor(private tarefaService: Tarefa ){}

 adicionar(): void {
    if (!this.titulo.trim()) return;
    this.tarefaService.adicionar({ id: 0,
      titulo: this.titulo.trim(),
      concluida: false,
    });
    this.titulo = ''; 
  }
}



