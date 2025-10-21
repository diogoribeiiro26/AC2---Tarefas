import {  Routes } from '@angular/router';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListarTarefa } from './listar-tarefa/listar-tarefa';

export const routes: Routes = [
    {path: 'cadastrar-tarefa', component: CadastrarTarefa},
    {path: 'listar-tarefa', component:ListarTarefa}
];



