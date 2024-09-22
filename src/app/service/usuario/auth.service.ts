import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Curso } from '../../model/enum/curso';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private router: Router, private userService: UsuarioService) { }

  curso: string = '';

  // redirect(){
  //    this.curso = this.userService.getUsuario().curso.toString;

  //    if (this.curso == 'ELETRONICA'){
  //     this
  //    }

  // }
}
