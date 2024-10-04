import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { criarSenhaForte } from '../../validators/password';
import { MessageService } from 'primeng/api';
import { ConfirmPasswordService } from '../../validators/confirm-password.service';
import { UsuarioRequest } from '../../model/request/usuarioRequest';
import { CadastroService } from '../../service/usuario/cadastro/cadastro.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [MessageService]

})

@Injectable()
export class CadastroComponent implements OnInit {

cadastroForm!: FormGroup;

constructor (
 private service: CadastroService,
 private message: MessageService,
 private fb: FormBuilder,
 private routeador: Router,
 private request: UsuarioRequest,
 private ngxLoader: NgxUiLoaderService,

){}

// tirar o request do constructor e testar para ver se vai dar erro

ngOnInit(): void {
    this.initForm();
}

get f (){return this.cadastroForm.controls};


initForm(){
  this.cadastroForm = this.fb.group(
    {
      nome:[null, [Validators.required]],
      username:[null, [Validators.required]],
      email:[null, Validators.compose([Validators.required, Validators.email])],
      password: [null,  Validators.compose([Validators.required, criarSenhaForte()])],
      confirm_password: [null,  Validators.compose([Validators.required, criarSenhaForte()])], // Aqui usamos o método diretamente
      curso:[null, [Validators.required]],
    },
    {
      validator: ConfirmPasswordService.MatchingPassword
    }
  );
}

montarRequest(){
  const form = this.cadastroForm.getRawValue();
  this.request.nome = (form.nome == null || (form.nome) == 0 ? null : (form.nome));
  this.request.username = (form.username == null || (form.username) == 0 ? null : (form.username));
  this.request.email = (form.email == null || (form.email) == 0 ? null : (form.email));
  this.request.curso = (form.curso == null || (form.curso == '')? null : (form.curso));
  this.request.senha = (form.password == null || (form.password == '')? null : (form.password));

  this.cadastrar();
}

cadastrar(){
  this.ngxLoader.start();
  this.service.cadastrar(this.request).subscribe({
    next: (result) => {
      console.log("A requisição foi um sucesso!" + result);
      this.routeador.navigate(['email'])
      this.ngxLoader.stop();
    },
    error: (erro) => {
      this.message.add({severity:'error', summary: 'Erro', detail: 'Não foi possivel fazer o cadastro' })
      console.log(erro);
      this.ngxLoader.stop();
    }
  })
}

login(){
  this.routeador.navigate([''])
}

// @Input() strongLabel: string = 'Strong';

// /[A-Z]+/[a-z]+/.test(value);
// const temValoresNumericos = /[0-9]+/.test(value);
// const temCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
//     /**
//      * Whether to show the strength indicator or not.
//      * @group Props
//      */

customPasswordStrength(value: string) {
  let strength = { weakLabel: false, mediumLabel: false, strongLabel: false };

  if (!value) {
    return strength; // Retorne um objeto padrão se a senha não estiver definida
  }

  // Critérios para uma senha forte
  const temCaracteresMaiusculos = /[A-Z]+/.test(value);
  const temCaracteresMinusculos = /[a-z]+/.test(value);
  const temValoresNumericos = /[0-9]+/.test(value);
  const temCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
  const temMinimoOitoCaracteres = value.length >= 8;

  // Verificação de força
  if (
    temCaracteresMaiusculos &&
    temCaracteresMinusculos &&
    temValoresNumericos &&
    temCaracterEspecial &&
    temMinimoOitoCaracteres
  ) {
    strength.strongLabel = true;
  } else if (value.length >= 6) {
    strength.mediumLabel = true;
  } else {
    strength.weakLabel = true;
  }
  console.log('Verificando força da senha:', value);
  console.log('Caracteres maiúsculos:', temCaracteresMaiusculos);
  console.log('Caracteres minúsculos:', temCaracteresMinusculos);
  console.log('Valores numéricos:', temValoresNumericos);
  console.log('Caracter especial:', temCaracterEspecial);
  console.log('Mínimo de 8 caracteres:', temMinimoOitoCaracteres);

  return strength;
}

  }
