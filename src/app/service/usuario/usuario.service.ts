import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { urlConfig } from '../../../assets/config/urlConfig';
import { UsuarioPutSenhaRequest } from '../../model/request/usuarioPutSenhaRequest';
import {environment as env } from '../../../environments/enviroment';
import { UsuarioResponse } from '../../model/response/usuarioResponse';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  user!: UsuarioResponse

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient ) { }

  getUsuario(): UsuarioResponse {
    const usuarioString = localStorage.getItem('usuario');
    return usuarioString ? JSON.parse(usuarioString) : null;
  }

  setUsuario(usuario: UsuarioResponse): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  clearUsuario(): void {
    localStorage.removeItem('usuario');
  }


  alterarPerfil(user: UsuarioResponse): Observable<UsuarioResponse> {
    return this.httpClient.put(`${env.baseApiUrl}/${urlConfig.alterarPerfil}`, user, this.httpOptions).pipe(
      map((res:any) => res)
    )
  }

  alterarSenha(userSenha: UsuarioPutSenhaRequest): Observable<UsuarioResponse> {
    return this.httpClient.put(`${env.baseApiUrl}/${urlConfig.alterarSenha}`,userSenha, this.httpOptions).pipe(
      map((res:any) => res)
    )
  }

  deletar(id: String): Observable<any> {
    return this.httpClient.put(env.baseApiUrl + '/' + urlConfig.deletar,id, this.httpOptions).pipe(
      map((res:any) => res)
    )
  }


}

