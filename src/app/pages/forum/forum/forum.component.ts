import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/enum/curso';
import { ForumService } from '../../../service/forum/forum.service';
import { PerguntaResponse } from '../../../model/response/perguntaResponse';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
  providers: [MessageService]
})
export class ForumComponent implements OnInit {

  cities!: City[];

  selectedCities!: City[];

  constructor(private forumService: ForumService, private userService: UsuarioService, private routes: Router,
    private message:MessageService) { }

  ngOnInit() {
    this.loadPerguntasCurso(this.userService.getUsuario().curso);


    this.cities = [
      {name: 'LOGICA_DE_PROGRAMACAO', code: 'LG'},
      {name: 'REDES_DE_COMPUTADORES_E_INTERNET', code: 'RDI'},
      {name: 'APLICACOES_PARA_WEB', code: 'AW'},
      {name: 'SISTEMAS_COMPUTACIONAIS', code: 'STC'},
  ];
  }


  loadPerguntasCurso(curso: Curso): void {
    this.forumService.getPerguntasCurso(curso).subscribe({
      next: (perguntas: PerguntaResponse[]) => {
        // Armazena as perguntas no localStorage
        // localStorage.setItem('perguntasCurso', JSON.stringify(perguntas));

        // deletar depois, teste unico para carregar a tela
        if (perguntas.length > 0) {
          const pergunta = perguntas[0];
          const mappedPergunta = {
            perguntaId: pergunta.perguntaId,
            titulo: pergunta.titulo,
            detalhes: pergunta.detalhes,
            usuario: pergunta.usuario,
            curso: pergunta.curso,
            dataCriado: pergunta.dataCriado,
            tags: pergunta.tags,
            status: pergunta.status
          };
          // Armazena a pergunta transformada no localStorage
          localStorage.setItem('pergunta', JSON.stringify(mappedPergunta));
          console.log('Primeira pergunta armazenada no localStorage:', mappedPergunta);
        }
      },
      error: (error) => {
        console.error('Erro ao carregar perguntas do curso:', error);
      }
    })
 }

 //encontrar uma forma de passar apenas uma pergunta response, quando clicado
 direcionarRespostas(pergunta:PerguntaResponse){
  if(pergunta != null){
      localStorage.setItem('pergunta', JSON.stringify(pergunta));
      this.routes.navigate(['/resposta']);
    } else{
      this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel recuperar o ID da pergunta selecionada' })
    }
 }




}
