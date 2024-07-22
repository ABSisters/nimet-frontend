import { PerguntaResponse } from './../../../model/response/perguntaResponse';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ForumService } from '../../../service/forum/forum.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { RepostaPostRequest } from '../../../model/request/respostaPostRequest';
import { RespostaResponse } from '../../../model/response/respostaResponse';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.scss'],
  providers: [MessageService]
})
export class RespostaComponent implements OnInit{

  constructor(private forumService: ForumService, private userService: UsuarioService, private message: MessageService){}
    pergunta!: PerguntaResponse;
    resposta: RepostaPostRequest = new RepostaPostRequest;
    retornoRespostas: RespostaResponse[] = [];

  ngOnInit() {
    this.resposta.usuarioId = this.userService.getUsuario().usuarioId;
    // this.pergunta = this.forumService.getPerguntaId();
    this.pergunta = this.forumService.getPerguntaId();
    this.getRespostas(this.pergunta); // deixar mocado por enquanto...

  }

  adicionarResposta(){
    this.forumService.adicionarResposta(this.resposta).subscribe({
      next:(result) => {
        this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta postada com sucesso' })
        console.log(result)
      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel fazer adicionar a pergunta' })
        console.log(erro);
      }
    })
  }

  getRespostas(request: PerguntaResponse){
    this.forumService.getRespostasDeUmaPergunta(request.perguntaId).subscribe({
      next: (result) =>{
        this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Respotas recuperadas com sucesso' })
        console.log(result);
        this.retornoRespostas = result;
        this.forumService.clear();
      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel recuperar as respostas' })
        console.log(erro);
      }
    })
  }

}
