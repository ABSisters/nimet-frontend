import { routes } from './../../../app.routes';
import { PerguntaResponse } from './../../../model/response/perguntaResponse';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ForumService } from '../../../service/forum/forum.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { RepostaPostRequest } from '../../../model/request/respostaPostRequest';
import { RespostaResponse } from '../../../model/response/respostaResponse';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.scss'],
  providers: [MessageService]
})
export class RespostaComponent implements OnInit{

  showOptions: boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  constructor(private forumService: ForumService, private userService: UsuarioService, private message: MessageService,  private routes: Router){}
    pergunta!: PerguntaResponse;
    resposta: RepostaPostRequest = new RepostaPostRequest;
    retornoRespostas: RespostaResponse[] = [];

  ngOnInit() {
    this.resposta.usuarioId = this.userService.getUsuario().usuarioId;
    // this.pergunta = this.forumService.getPerguntaId();
    this.pergunta = this.forumService.perguntaSelecionada;
    this.resposta.perguntaId = this.pergunta.perguntaId
    this.getRespostas(this.pergunta); // deixar mocado por enquanto...

  }

  adicionarResposta(){
    if (!this.pergunta.status) { // Se a pergunta está fechada
      this.message.add({ severity: 'warn', summary: 'Aviso', detail: 'Essa pergunta está fechada, não é possível adicionar novas respostas' });
    }
    this.forumService.adicionarResposta(this.resposta).subscribe({
      next:(result) => {
        this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta postada com sucesso' })
        this.getRespostas(result.pergunta);
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

  fecharPergunta(){
    this.forumService.fecharPergunta(this.resposta.perguntaId, this.resposta.usuarioId).subscribe({
      next: (result) =>{
        this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta fechada com sucesso' })
        console.log(result);
        this.pergunta = result;
      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel fechar a pergunta' })
        console.log(erro);
      }
    })
  }

  deletarPergunta(){
    this.forumService.deletarPergunta(this.resposta.perguntaId, this.resposta.usuarioId).subscribe({
      next: (result) =>{
        this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta deletada com sucesso' })
        console.log(result);
        this.routes.navigate(['/forum'])
      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel deletar a pergunta' })
        // mudar para trazer a mensagem do back -- pode ser que esse usaurio nao tenha permissao
        console.log(erro);
      }
    })
  }

}
