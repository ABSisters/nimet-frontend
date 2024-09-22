import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class UsuarioRequest{
  nome?: string;
  username?: string;
  email?:string;
  senha?:string;
  curso?:string;


}
