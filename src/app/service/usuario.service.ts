import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioResponse } from './../model/usuarioResponse';
import { environment as env } from '../../environments/enviroment';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { urlConfig } from '../../assets/config/urlConfig';
import { UsuarioPutSenhaRequest } from '../model/usuarioPutSenhaRequest';

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
