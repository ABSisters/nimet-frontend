import { PerguntaResponse } from './../../../model/response/perguntaResponse';
import { PerguntaPostRequest } from './../../../model/request/perguntaPostRequest';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/enum/curso';
import { ForumService } from '../../../service/forum/forum.service';
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

  perguntasForum!: PerguntaResponse[];


  constructor(private forumService: ForumService, private userService: UsuarioService,
    private routes: Router, private message: MessageService) { }

  ngOnInit() {
    this.loadPerguntasCurso(this.userService.getUsuario().curso);


    this.cities = [
      { name: 'LOGICA_DE_PROGRAMACAO', code: 'LOGICA_DE_PROGRAMACAO' },
      { name: 'REDES_DE_COMPUTADORES_E_INTERNET', code: 'REDES_DE_COMPUTADORES_E_INTERNET' },
      { name: 'APLICACOES_PARA_WEB', code: 'APLICACOES_PARA_WEB' },
      { name: 'SISTEMAS_COMPUTACIONAIS', code: 'SISTEMAS_COMPUTACIONAIS' },
    ];
  }


  loadPerguntasCurso(curso: Curso): void {
    this.forumService.getPerguntasCurso(curso).subscribe({
      next: (perguntas: PerguntaResponse[]) => {
        localStorage.setItem('perguntasCurso', JSON.stringify(perguntas));
        this.perguntasForum = perguntas
      },
      error: (error) => {
        console.error('Erro ao carregar perguntas do curso:', error);
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Nenhum dos campos pode estar vazio' });

      }
    })
  }


  registrarPergunta(pergunta: PerguntaResponse) {
    localStorage.setItem('perguntaSelecionada', JSON.stringify(pergunta));
    this.direcionarRespostas(pergunta);
    console.log('Pergunta registrada:', pergunta);
  }
  direcionarRespostas(pergunta: PerguntaResponse) {
    if (pergunta != null) {
      this.forumService.perguntaSelecionada = pergunta;
      localStorage.setItem('pergunta', JSON.stringify(pergunta));
      this.routes.navigate(['/resposta']);
    } else {
      this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel recuperar o ID da pergunta selecionada' })
      console.log('erro');
    }
  }

  adicionar() {
    this.routes.navigate(['/adicionar-pergunta'])
  }




}
