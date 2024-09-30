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
          { name: 'MECANICA_GERAL', code: 'MECANICA_GERAL' },
          { name: 'DESENHO_TECNICO', code: 'DESENHO_TECNICO' },
          { name: 'MATERIAIS_E_PROCESSOS_DE_FABRICACAO', code: 'MATERIAIS_E_PROCESSOS_DE_FABRICACAO' },
          { name: 'MACANICA_DOS_MATERIAIS', code: 'MACANICA_DOS_MATERIAIS' },
          { name: 'AUTOMACAO_INDUSTRIAL', code: 'AUTOMACAO_INDUSTRIAL' },
          { name: 'CONTROLE_DE_QUALIDADE', code: 'CONTROLE_DE_QUALIDADE' },
          { name: 'DINAMICA_DOS_SISTEMAS', code: 'DINAMICA_DOS_SISTEMAS' },
          { name: 'TERMODINAMICA_AVANCADA', code: 'TERMODINAMICA_AVANCADA' },
        ];
        break;
      case 'INFORMATICA':
        this.tags = [
          { name: 'SISTEMAS_COMPUTACIONAIS', code: 'SISTEMAS_COMPUTACIONAIS' },
          { name: 'LINGUAGEM_DE_PROGRAMACAO', code: 'LINGUAGEM_DE_PROGRAMACAO' },
          { name: 'REDES_DE_COMPUTADORES_E_INTERNET', code: 'REDES_DE_COMPUTADORES_E_INTERNET' },
          { name: 'LOGICA_DE_PROGRAMACAO', code: 'LOGICA_DE_PROGRAMACAO' },
          { name: 'APLICACAO_WEB', code: 'APLICACAO_WEB' },
          { name: 'BANCO_DE_DADOS', code: 'BANCO_DE_DADOS' },
          { name: 'SEGURANCA_DA_INFORMACAO', code: 'SEGURANCA_DA_INFORMACAO' },
          { name: 'DESENVOLVIMENTO_DE_SISTEMAS', code: 'DESENVOLVIMENTO_DE_SISTEMAS' },
        ];
        break;
      case 'ELETRONICA':
        this.tags = [
          { name: 'FUNDAMENTOS_DA_ELETRONICA', code: 'FUNDAMENTOS_DA_ELETRONICA' },
          { name: 'DESENHO_DE_CIRCUITOS', code: 'DESENHO_DE_CIRCUITOS' },
          { name: 'COMPONENTES_ELETRONICOS', code: 'COMPONENTES_ELETRONICOS' },
          { name: 'ELETRONICA_ANALOGICA', code: 'ELETRONICA_ANALOGICA' },
          { name: 'MICROCONTROLADORES', code: 'MICROCONTROLADORES' },
          { name: 'SISTEMAS_DIGITAIS', code: 'SISTEMAS_DIGITAIS' },
          { name: 'ELETRONICA_ANALOGICA_AVANCADA', code: 'ELETRONICA_ANALOGICA_AVANCADA' },
          { name: 'SISTEMAS_DIGITAIS_AVANCADOS', code: 'SISTEMAS_DIGITAIS_AVANCADOS' },
          { name: 'INSTRUMENTACAO_ELETRONICA_AVANCADA', code: 'INSTRUMENTACAO_ELETRONICA_AVANCADA' },
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

  home(){
    this.routes.navigate(['/curso/basico'])
  }



}
