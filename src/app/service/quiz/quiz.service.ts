import { PerguntaResponse } from '../../model/response/perguntaResponse';
import {environment as env } from '../../../environments/enviroment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { urlConfig } from '../../../assets/config/urlConfig';
import { Curso } from '../../model/enum/curso';
import { QuizPostRequest } from '../../model/request/quizPostRequest';
import { QuizResponse } from '../../model/response/quizResponse';
import { QuestaoResponse } from '../../model/response/questaoResponse';
import { Nivel } from '../../model/enum/nivel';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) { }

  getQuestoesQuiz(curso: Curso, nivel: Nivel): Observable<QuestaoResponse[]>{
    return this.httpClient.get(env.baseApiUrl + '/questoes/curso/'+ curso  +'/nivel/'+ nivel ).pipe(
      map((res:any) => res)
    )
  }


  responder(quiz: QuizPostRequest): Observable<QuizResponse>{
    return this.httpClient.post<QuizResponse>(env.baseApiUrl + '/' + urlConfig.responderQuiz, quiz).pipe(
      map((res:any) => res)
    )
  }


  getQuizUsuario(usuarioId: String): Observable<QuizResponse[]>{
    return this.httpClient.get(env.baseApiUrl + '/' + urlConfig.resultadoQuiz +'/'+ usuarioId).pipe(
      map((res:any) => res)
    )
  }
}
