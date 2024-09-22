import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { MessageService } from 'primeng/api';
import { UsuarioPutSenhaRequest } from '../../model/request/usuarioPutSenhaRequest';
import { UsuarioResponse } from '../../model/response/usuarioResponse';
import { ForumService } from '../../service/forum/forum.service';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.scss'],
  providers: [MessageService]

})
export class SenhaComponent implements OnInit{

  user!:UsuarioResponse
  userSenha!:UsuarioPutSenhaRequest
  senha!: string;

  constructor(
    private userService: UsuarioService,
    private message: MessageService) { }


  ngOnInit() {
    this.user = this.userService.getUsuario();
    this.userSenha = { usuarioId: '', senhaAtual: '', senhaNova: '' }; // Inicializa com valores padrão

  }

  trocarSenha() {
    this.userSenha.usuarioId = this.user.usuarioId;
    this.userService.alterarSenha(this.userSenha).subscribe({
      next: (usuario) => {
        console.log(this.userSenha);
        console.log(usuario);
        this.message.add({ severity: 'sucess', summary: 'sucess', detail: 'Senha alterada com sucesso' });
      },
      error: (erro) => {
        console.log(this.userSenha);
        console.log(erro);
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao alterar senha' })
      }
    })

  }

}
