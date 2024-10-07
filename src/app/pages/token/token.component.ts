import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CadastroService } from '../../service/usuario/cadastro/cadastro.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RemandarEmailRequest } from '../../model/request/remandarEmailRequest';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
  providers: [MessageService]
})
export class TokenComponent implements OnInit {
  constructor (private service: CadastroService,
    private message: MessageService,
    private routeador: Router,
    private ngxLoader: NgxUiLoaderService,
  ) {}

  usuario!:RemandarEmailRequest;

  ngOnInit(): void {
  }


  verificar(){
    this.ngxLoader.start();
    this.service.reenviarToken(this.usuario).subscribe({
      next: (result) => {
        this.message.add({severity:'sucess', summary: 'Sucess', detail: 'Token reenviado com sucesso' })
        this.routeador.navigate(['/email']);
        this.ngxLoader.stop();
      },
      error: (erro) => {
        this.message.add({severity:'error', summary: 'Erro', detail: 'Não foi possivel reenviar o token' })
        console.log("A requisição não teve sucesso", JSON.stringify(erro));
        this.ngxLoader.stop();
      }
    })
  }


}

