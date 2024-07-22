import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ForumService } from '../../../service/forum/forum.service';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { PerguntaPostRequest } from './../../../model/request/perguntaPostRequest';

@Component({
  selector: 'app-adicionar-pergunta',
  templateUrl: './adicionar-pergunta.component.html',
  styleUrls: ['./adicionar-pergunta.component.scss'],
  providers: [MessageService]
})
export class AdicionarPerguntaComponent implements OnInit {

  perguntaForm!: FormGroup;

  categories: string[] = [
    'LOGICA_DE_PROGRAMACAO',
    'REDES_DE_COMPUTADORES_E_INTERNET',
    'APLICACOES_PARA_WEB',
    'SISTEMAS_COMPUTACIONAIS'
  ];

  constructor(
    private forumService: ForumService,
    private userService: UsuarioService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.perguntaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      detalhes: ['', [Validators.required]],
      tags: [[]] // Inicializa como um array vazio para as tags
    });
  }

  montarRequest(): void {
    const form = this.perguntaForm.getRawValue();
    const tagsArray = Array.isArray(form.tags) ? form.tags : [form.tags];


    // Criando o objeto de request
    const request: PerguntaPostRequest = {
      detalhes: form.detalhes || null,
      titulo: form.titulo || null,
      usuarioId: this.userService.getUsuario().usuarioId,
      tags: tagsArray
    };

    this.postar(request);
    console.log(request);
  }

  postar(request: PerguntaPostRequest): void {
    this.forumService.adicionarPergunta(request).subscribe({
      next: (result) => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Pergunta postada com sucesso' });
        console.log(result);
      },
      error: (erro) => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível adicionar a pergunta' });
        console.error(erro);
      }
    });
  }
}
