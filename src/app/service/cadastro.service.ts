import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment as env } from '../../environments/enviroment';
import { urlConfig } from '../../assets/config/urlConfig';
import { UsuarioRequest } from '../model/usuarioRequest';
import { UsuarioResponse } from '../model/usuarioResponse';
import { LoginRequest } from '../model/loginRequest';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private router: Router) { }

  cadastrar(request: UsuarioRequest): Observable<UsuarioResponse> {
    return this.httpClient.post(env.baseApiUrl + '/' + urlConfig.cadastrarUsuario, request).pipe(
      map((res: any) => res)
    )
  }

  logar(request: LoginRequest): Observable<UsuarioResponse> {
    return this.httpClient.post<any>(env.baseApiUrl + '/' + urlConfig.logar + '?login=' + request.login + '&senha=' + request.password, null).pipe(
      map((res: UsuarioResponse) => {
        localStorage.setItem('usuario', JSON.stringify(res));
        localStorage.setItem('logado', btoa(JSON.stringify("Usuario logado")));
        return res;
      })
    )
  }

  verficarEmail(token: String): Observable<any> {
    return this.httpClient.put(env.baseApiUrl + '/' + urlConfig.verificarEmail, token, this.httpOptions).pipe(
      map((res: any) => res)
    )
  }

  get logado(): boolean {
    return localStorage.getItem('logado') ? true : false;
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
