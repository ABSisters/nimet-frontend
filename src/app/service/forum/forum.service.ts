import { PerguntaResponse } from './../../model/response/perguntaResponse';
import {environment as env } from '../../../environments/enviroment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { urlConfig } from '../../../assets/config/urlConfig';
import { Curso } from '../../model/enum/curso';
import { PerguntaPostRequest } from '../../model/request/perguntaPostRequest';
import { RepostaPostRequest } from '../../model/request/respostaPostRequest';
import { RespostaResponse } from '../../model/response/respostaResponse';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  perguntaSelecionada!: PerguntaResponse;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) { }

  getPerguntaId(): PerguntaResponse {
    const pergunta = localStorage.getItem('pergunta');
    return pergunta ? JSON.parse(pergunta) : null;
  }

  clear(): void {
    localStorage.removeItem('pergunta');
  }

  adicionarPergunta(pergunta: PerguntaPostRequest): Observable<PerguntaResponse>{
    return this.httpClient.post<PerguntaResponse>( env.baseApiUrl + '/' + urlConfig.adicionarPergunta, pergunta, this.httpOptions).pipe(
      map((res:any) => res)
    )
  }

  getPerguntasdoUsuario(id: String): Observable<PerguntaResponse[]>{
    return this.httpClient.get<PerguntaResponse[]>(env.baseApiUrl + '/' + urlConfig.perguntasUsuario +  '/' + id).pipe(
      map((res:any) => res)
    )
  }


  getPerguntasCurso(curso: Curso): Observable<PerguntaResponse[]>{
    return this.httpClient.get(env.baseApiUrl + '/' + urlConfig.perguntasCurso + '/'+ curso).pipe(
      map((res:any) => res)
    )
  }

  getPergunta(perguntaId: String): Observable<PerguntaResponse>{
    return this.httpClient.get(env.baseApiUrl + '/' + '?perguntaId='+ perguntaId).pipe(
      map((res:any) => res)
    )
  }

  adicionarResposta(resposta: RepostaPostRequest): Observable<RespostaResponse>{
    return this.httpClient.post<RespostaResponse>(env.baseApiUrl + '/' + urlConfig.adicionarResposta, resposta).pipe(
      map((res:any) => res)
    )
  }

  getRespostasDoUsuario(usuarioId: String): Observable<RespostaResponse[]>{
    return this.httpClient.get(env.baseApiUrl+ '/' + urlConfig.getRespostasUsuario + '/'  + usuarioId).pipe(
      map((res:any) => res)
    )
  }

  getRespostasDeUmaPergunta(perguntaId: String): Observable<RespostaResponse[]>{
    return this.httpClient.get(env.baseApiUrl + '/' + urlConfig.getRespostas + '/' + perguntaId).pipe(
      map((res:any) => res)
    )
  }


  }



