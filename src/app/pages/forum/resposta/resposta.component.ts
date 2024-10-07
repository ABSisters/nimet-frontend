import { routes } from './../../../app.routes';
import { PerguntaResponse } from './../../../model/response/perguntaResponse';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ForumService } from '../../../service/forum/forum.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { RepostaPostRequest } from '../../../model/request/respostaPostRequest';
import { RespostaResponse } from '../../../model/response/respostaResponse';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DenunciaPostRequest } from '../../../model/request/denunciaPostRequest';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmPopup } from 'primeng/confirmpopup';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class RespostaComponent implements OnInit
{
  messageService: any;
  showOptions: boolean = false;
  showDenuncia: boolean = false;
  denuncia!: DenunciaPostRequest;

  categories: string[] = [
    'Conteúdo ofensivo',
    'Spam',
    'Violência',
    'Fake News'
  ];
category: string|undefined;
visible: any;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    // Verifica se o clique foi fora do botão ou do menu
    if (!targetElement.closest('.opcao') && !targetElement.closest('.opcoes')) {
      this.showOptions = false;
    }
  }

  constructor(private forumService: ForumService, private userService: UsuarioService,
    private message: MessageService,  private routes: Router,
    private ngxLoader: NgxUiLoaderService, private confirmationService: ConfirmationService// Injete o serviço de loader
  ){}
    pergunta!: PerguntaResponse;
    resposta: RepostaPostRequest = new RepostaPostRequest;
    retornoRespostas: RespostaResponse[] = [];

  ngOnInit() {
    this.resposta.usuarioId = this.userService.getUsuario().usuarioId;
    // this.pergunta = this.forumService.getPerguntaId();
    this.pergunta = this.forumService.perguntaSelecionada;
    this.resposta.perguntaId = this.pergunta.perguntaId
    this.getRespostas(this.pergunta); // deixar mocado por enquanto...
    this.denuncia = {
      conteudo: '',
      motivo: '',
      usuarioId: ''
  };

  }

  adicionarResposta(){
    this.ngxLoader.start();

    if (!this.pergunta.status) { // Se a pergunta está fechada
      this.message.add({ severity: 'warn', summary: 'Aviso', detail: 'Essa pergunta está fechada, não é possível adicionar novas respostas' });
    }
    this.forumService.adicionarResposta(this.resposta).subscribe({
      next:(result) => {
        // this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta postada com sucesso' })
        this.getRespostas(result.pergunta);
         this.resposta.resposta = '';
         this.ngxLoader.stop();

      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel fazer adicionar a pergunta' })
        console.log(erro);
        this.ngxLoader.stop();

      }
    })
  }

  getRespostas(request: PerguntaResponse){
    this.forumService.getRespostasDeUmaPergunta(request.perguntaId).subscribe({
      next: (result) =>{
        // this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Respotas recuperadas com sucesso' })
        console.log(result);
        this.retornoRespostas = result;
        this.forumService.clear();

      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel recuperar as respostas' })
      }
    })
  }

  fecharPergunta(){
    this.ngxLoader.start();
    this.forumService.fecharPergunta(this.resposta.perguntaId, this.resposta.usuarioId).subscribe({
      next: (result) =>{
        // this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta fechada com sucesso' })
        console.log(result);
        this.pergunta = result;
        this.routes.navigate(['/forum'])
        this.ngxLoader.stop();

      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel fechar a pergunta' })
        console.log(erro);
        this.ngxLoader.stop();

      }
    })
  }

  deletarPergunta(){
    this.ngxLoader.start();
    this.forumService.deletarPergunta(this.resposta.perguntaId, this.resposta.usuarioId).subscribe({
      next: (result) =>{
        // this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta deletada com sucesso' })
        console.log(result);
        this.routes.navigate(['/forum'])
        this.ngxLoader.stop();

      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel deletar a pergunta' })
        this.ngxLoader.stop();
      }
    })
  }

  deletarResposta(index: number, respostaId: string){
    this.ngxLoader.start();
    this.forumService.deletarResposta(respostaId, this.resposta.usuarioId).subscribe({
      next: (result) =>{
        // this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta deletada com sucesso' })
        this.retornoRespostas.splice(index, 1);
        this.ngxLoader.stop();
      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel deletar a pergunta' })
        this.ngxLoader.stop();
      }
    })
  }

  denunciar(motivo: string, conteudo: string){
    this.ngxLoader.start();
    this.denuncia.usuarioId = this.resposta.usuarioId;
    this.denuncia.conteudo = conteudo;
    this.denuncia.motivo = motivo;
    this.userService.denunciar(this.denuncia).subscribe({
      next: (result) =>{
        this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Denúncia feita com sucesso' })
        this.showDenuncia = false;
        this.ngxLoader.stop();
      },
      error:(erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel denunciar, tente novamente' })
        this.ngxLoader.stop();
      }
    })

  }


  show(){
    this.showDenuncia = true;
  }

  @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;

  accept() {
      this.confirmPopup.accept();
  }

  reject() {
      this.confirmPopup.reject();
  }

  confirm(event: Event) {
      this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Qual seria o motivo para denunciar?',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
          }
      });
    }


    voltar(){
      this.routes.navigate(['forum']);
    }
}
