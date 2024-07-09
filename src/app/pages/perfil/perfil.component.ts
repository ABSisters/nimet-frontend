import { Component, OnInit,ViewChild } from '@angular/core';
import { UsuarioResponse } from '../../model/usuarioResponse';
import { UsuarioService } from '../../service/usuario.service';
import { MessageService } from 'primeng/api';
import { UsuarioPutSenhaRequest } from '../../model/usuarioPutSenhaRequest';
import { Sidebar } from 'primeng/sidebar';
// import {questions} from '../../../assets/'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [MessageService]

})
export class PerfilComponent implements OnInit {
  user!: UsuarioResponse;

  constructor(
    private userService: UsuarioService,
    private message: MessageService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
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

      },
      error: (erro) => {
        console.log(erro);
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel apagar este perfil' })
      }
    })
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
