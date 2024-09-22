import { PerguntaResponse } from './../../../model/response/perguntaResponse';
import { PerguntaPostRequest } from './../../../model/request/perguntaPostRequest';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/enum/curso';
import { ForumService } from '../../../service/forum/forum.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioResponse } from '../../../model/response/usuarioResponse';
import { Tags } from '../../../model/enum/Tags';


interface Tag {
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

  tags!: Tag[];

  selectedTag!: Tag[];

  perguntasForum!: PerguntaResponse[];

  user!: UsuarioResponse


  constructor(private forumService: ForumService, private userService: UsuarioService,
    private routes: Router, private message: MessageService) { }

  ngOnInit() {
    this.user = this.userService.getUsuario();
    this.loadPerguntasCurso(this.userService.getUsuario().curso);
    this.loadTagsPorCurso(this.user.curso); // Carrega tags específicas com base no curso

    // this.cities = [
    //   { name: 'LOGICA_DE_PROGRAMACAO', code: 'LOGICA_DE_PROGRAMACAO' },
    //   { name: 'REDES_DE_COMPUTADORES_E_INTERNET', code: 'REDES_DE_COMPUTADORES_E_INTERNET' },
    //   { name: 'APLICACOES_PARA_WEB', code: 'APLICACOES_PARA_WEB' },
    //   { name: 'SISTEMAS_COMPUTACIONAIS', code: 'SISTEMAS_COMPUTACIONAIS' },
    // ];
  }

  loadTagsPorCurso(curso: Curso) {
    switch (curso) {
      case 'MECANICA':
        this.tags = [
          { name: 'CONHECIMENTOS_BASICOS', code: 'CONHECIMENTOS_BASICOS' },
          { name: 'FISICA', code: 'FISICA' },
          { name: 'MECANICA_AVANCADA', code: 'MECANICA_AVANCADA' }
        ];
        break;
      case 'INFORMATICA':
        this.tags = [
          { name: 'LOGICA_DE_PROGRAMACAO', code: 'LOGICA_DE_PROGRAMACAO' },
          { name: 'REDES_DE_COMPUTADORES_E_INTERNET', code: 'REDES_DE_COMPUTADORES_E_INTERNET' },
          { name: 'APLICACOES_PARA_WEB', code: 'APLICACOES_PARA_WEB' },
          { name: 'SISTEMAS_COMPUTACIONAIS', code: 'SISTEMAS_COMPUTACIONAIS' }
        ];
        break;
      case 'ELETRONICA':
        this.tags = [
          { name: 'ELETRONICA', code: 'ELETRONICA' },
          { name: 'EXEMPLO', code: 'EXEMPLO' },
          { name: 'EXEMPLO', code: 'EXEMPLO' }
        ];
        break;
      default:
        this.tags = []; // Caso não haja tags específicas para o curso
        break;
    }
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

  limitarSelecao(event: any) {
    if (this.selectedTag.length > 1) {
      this.selectedTag = [event.value]; // Manter apenas a última tag selecionada
      this.selectedTag = [event.value.pop()];
      // this.message.add({ severity: 'error', summary: 'Erro', detail: 'Só é possivel realizar a pequisa com uma tag' });
    }else {
      this.selectedTag = event.value;
    }

    this.pesquisarTags();
  }
  pesquisarTags() {
    if (this.selectedTag && this.selectedTag.length === 1) {
      const selectedTag = this.selectedTag[0];
      this.forumService.getTags(selectedTag.code).subscribe({
        next: (perguntas: PerguntaResponse[]) => {
          localStorage.setItem('perguntasCurso', JSON.stringify(perguntas));
          this.perguntasForum = perguntas;
        },
        error: (error) => {
          console.error('Erro ao carregar perguntas da tag:', error);
          this.message.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao filtrar pela tag' });
        }
      });
    }
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
