import { Tags } from "../enum/Tags";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PerguntaPostRequest{
  usuarioId!: String ;
  titulo!: String ;
  detalhes!: String;
  tags: Tags[] = [];

}
