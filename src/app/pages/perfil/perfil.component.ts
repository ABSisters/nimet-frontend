import { ForumService } from './../../service/forum/forum.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioPutSenhaRequest } from '../../model/request/usuarioPutSenhaRequest';
import { Sidebar } from 'primeng/sidebar';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { UsuarioResponse } from '../../model/response/usuarioResponse';
import { RespostaResponse } from '../../model/response/respostaResponse';
import { PerguntaResponse } from '../../model/response/perguntaResponse';
// import {questions} from '../../../assets/'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [MessageService]

})
export class PerfilComponent implements OnInit {
  user!: UsuarioResponse;
  edit: boolean = true;
  respostas! : RespostaResponse[];
  perguntas! : PerguntaResponse[];


  constructor(
    private userService: UsuarioService,
    private message: MessageService,
    private forumService: ForumService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUsuario();
    this.respostasUsuario();
    this.perguntaUsuario();
  }

  excluirPerfil(user: UsuarioResponse) {
    this.userService.deletar(user.usuarioId).subscribe({
      next: (result) => {
        console.log(result)
        this.message.add({ severity: 'sucess', summary: 'Sucess', detail: 'Perfil deletado com sucesso' })
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



  allowEdit(){
    this.edit = false ;
  }


  // alterarSenha(user: UsuarioResponse, userSenha: UsuarioPutSenhaRequest) {
  //   this.userService.alterarSenha(userSenha).subscribe({
  //     next: (usuario) => {
  //       console.log(usuario);
  //       this.message.add({ severity: 'sucess', summary: 'sucess', detail: 'Senha alterada com sucesso' })
  //     },
  //     error: (erro) => {
  //       console.log(erro);
  //       this.message.add({ severity: 'error', summary: 'Erro', detail: erro.erro.message })
  //     }
  //   })
  // }




  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }
sidebarVisible: any;

}
