import { Router } from '@angular/router';
// import { CadastroService } from '../../service/cadastro.service';
import { PagesModule } from './../pages.module';
import { Component, OnInit } from '@angular/core';
import { UsuarioRequest } from '../../model/request/usuarioRequest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { criarSenhaForte } from '../../validators/password';
import { MessageService } from 'primeng/api';
import { CadastroService } from '../../service/usuario/cadastro/cadastro.service';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { UsuarioResponse } from '../../model/response/usuarioResponse';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit{

  // loginForm!: FormGroup;
  loginForm!:FormGroup;
  user!: UsuarioResponse;


constructor (
 private service: CadastroService,
 private userService: UsuarioService,
 private message: MessageService,
 private fb: FormBuilder,
 private routeador: Router,
 private ngxLoader: NgxUiLoaderService,
){}


  ngOnInit(): void {
    this.initForm();
  }

  get f (){return this.loginForm.controls};

initForm(){
  this.loginForm = this.fb.group(
    {
      login: ['',Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required,Validators.minLength(8), criarSenhaForte()])],
    }
  );
}

logar(){
  this.ngxLoader.start();
  this.service.logar(this.loginForm.value).subscribe({
    next: (usuario) => {
      if(usuario && usuario.usuarioId != null){
        // this.userService.user = usuario;
        this.userService.setUsuario(usuario);
        this.routeador.navigate(['/curso/basico']);
        this.ngxLoader.stop();
        console.log(this.loginForm.value)
      }
    },
    error: (erro) => {
      this.message.add({severity:'error', summary: 'Erro', detail: 'Não foi possivel fazer o login' })
      console.log("A requisição não teve sucesso", JSON.stringify(erro));
      this.ngxLoader.stop();
    }
  })
}


cadastro(){
  this.routeador.navigate(['/cadastro']);
}


}
