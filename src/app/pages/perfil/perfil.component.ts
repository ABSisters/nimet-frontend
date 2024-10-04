import { QuizResponse } from './../../model/response/quizResponse';
import { routes } from './../../app.routes';
import { ForumService } from './../../service/forum/forum.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioPutSenhaRequest } from '../../model/request/usuarioPutSenhaRequest';
import { Sidebar } from 'primeng/sidebar';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { UsuarioResponse } from '../../model/response/usuarioResponse';
import { RespostaResponse } from '../../model/response/respostaResponse';
import { PerguntaResponse } from '../../model/response/perguntaResponse';
import { Router } from '@angular/router';
import { QuizService } from '../../service/quiz/quiz.service';
// import {questions} from '../../../assets/'
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class PerfilComponent implements OnInit {
  user!: UsuarioResponse;
  edit: boolean = true;
  respostas! : RespostaResponse[];
  perguntas! : PerguntaResponse[];
  quiz!:QuizResponse[];


  constructor(
    private userService: UsuarioService,
    private message: MessageService,
    private forumService: ForumService,
    private quizService: QuizService,
    private routes: Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUsuario();
    this.respostasUsuario();
    this.perguntaUsuario();
    // this.resultadoQuiz();
  }

  excluirPerfil(user: UsuarioResponse) {
    this.userService.deletar(user.usuarioId).subscribe({
      next: (result) => {
        console.log(result)
        this.message.add({ severity: 'sucess', summary: 'Sucess', detail: 'Perfil deletado com sucesso' });
        this.userService.clearUsuario();
      },
      error: (erro) => {
        console.log(erro);
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel apagar este perfil' })
      }
    })
  }

  alterarPerfil(user: UsuarioResponse) {
    this.userService.alterarPerfil(user).subscribe({
      next: (usuario) => {
        console.log(usuario);
        this.message.add({ severity: 'sucess', summary: 'Sucess', detail: 'Perfil alterado com sucesso' })
        this.edit = true;
        this.userService.setUsuario(usuario);
      },
      error: (erro) => {
        console.log(erro);
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel apagar este perfil' })
      }
    })
  }

 respostasUsuario(){
    this.forumService.getRespostasDoUsuario(this.user.usuarioId).subscribe({
      next: (retorno) => {
        console.log(retorno);
        this.respostas = retorno;
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  perguntaUsuario(){
    this.forumService.getPerguntasdoUsuario(this.user.usuarioId).subscribe({
      next: (retorno) => {
        console.log(retorno);
        this.perguntas = retorno;
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  // resultadoQuiz(){
  //   this.quizService.getQuizUsuario(this.user.usuarioId).subscribe({
  //     next: (retorno) => {
  //       console.log(retorno);
  //       this.quiz = retorno;
  //     },
  //     error: (erro) => {
  //       console.log(erro);
  //     }
  //   })
  // }


  allowEdit(){
    this.edit = false ;
  }

  senha(){
    this.routes.navigate(['senha']);
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }
sidebarVisible: any;



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
        message: 'Deseja realmente excluir essa conta?',
        accept: () => {
            this.messageService.add({ severity: 'error', summary: 'Confirmed', detail: 'Exclusão de perfil não realizada', life: 3000 });
        },
        reject: () => {
            this.messageService.add({ severity: 'success', summary: 'Rejected', detail: 'Esse perfil será excluido', life: 3000 });
        }
    });
}

}
