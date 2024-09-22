import { Curso } from "../enum/curso";
import { Nivel } from "../enum/nivel";
import { UsuarioResponse } from "./usuarioResponse";

export class QuizResponse{
  quizId!: string;
  usuario!: UsuarioResponse;
  curso!: Curso;
  nivel!: Nivel;
  acertos!:number;
  erros!:number;
  dataCriado!: Date;
}
