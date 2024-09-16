import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CadastroService } from '../../service/usuario/cadastro/cadastro.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [MessageService]
})

export class EmailComponent implements OnInit {

  constructor (private service: CadastroService,
    private message: MessageService,
    private routeador: Router) {}

  token!:String;

  ngOnInit(): void {
  }


  verificar(){
    this.service.verficarEmail(this.token).subscribe({
      next: (result) => {
        this.message.add({severity:'sucess', summary: 'Sucess', detail: 'Validação feita com sucesso' })
        this.routeador.navigate(['']);
        console.log("A requisição foi um sucesso!" + this.token );
        console.log(result);
      },
      error: (erro) => {
        this.message.add({severity:'error', summary: 'Erro', detail: 'Não foi possivel fazer a validação' })
        console.log("A requisição não teve sucesso", JSON.stringify(erro));
        console.log(erro);
      }
    })
  }


}
