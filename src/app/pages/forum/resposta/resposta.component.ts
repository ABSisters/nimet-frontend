import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ForumService } from '../../../service/forum/forum.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { RepostaPostRequest } from '../../../model/request/respostaPostRequest';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.scss'],
  providers: [MessageService]
})
export class RespostaComponent implements OnInit{

  constructor(private forumService: ForumService, private userService: UsuarioService, private message: MessageService,
    private fb: FormBuilder){}

    resposta: RepostaPostRequest = new RepostaPostRequest;

  ngOnInit() {
    this.resposta.usuarioId = this.userService.getUsuario().usuarioId;
    // this.resposta.perguntaId = vai vir da onde??

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



}
