import { PerguntaPostRequest } from './../../../model/request/perguntaPostRequest';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../../service/forum/forum.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../service/usuario/usuario.service';

@Component({
  selector: 'app-adicionar-pergunta',
  templateUrl: './adicionar-pergunta.component.html',
  styleUrls: ['./adicionar-pergunta.component.scss']
})
export class AdicionarPerguntaComponent implements OnInit {

  constructor(private forumService: ForumService, private userService: UsuarioService, private message: MessageService,
    private fb: FormBuilder) { }

  request!: PerguntaPostRequest
  perguntaForm!: FormGroup;


  ngOnInit() {
    this.perguntaForm = this.fb.group({
    titulo: ['', [Validators.required]],
    detalhes: ['', [Validators.required]],
    tags: [[null], [Validators.required]]
    })
  }


  montarRequest() {
    const form = this.perguntaForm.getRawValue();
    this.request.detalhes = (form.detalhes == null || (form.detalhes == '') ? null : (form.detalhes));
    this.request.titulo = (form.titulo == null || (form.titulo == '') ? null : (form.titulo))
    this.request.tags = (form.email == null || (form.email) == 0 ? null : (form.email));
    this.request.usuarioId = this.userService.getUsuario().usuarioId;

    this.postar();
  }


  postar() {
    this.forumService.adicionarPergunta(this.request).subscribe({
      next: (result) => {
        this.message.add({ severity: 'sucess', summary: 'Sucesso', detail: 'Pergunta postada com sucesso' })
        console.log(result);
      },
      error: (erro) => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel fazer adicionar a pergunta' })
        console.log(erro);
      }
    })
  }



}
