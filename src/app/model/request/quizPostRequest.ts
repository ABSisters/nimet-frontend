import { Curso } from "../enum/curso";
import { Nivel } from "../enum/nivel";

export class QuizPostRequest{
  usuarioId!: string;
  curso!: Curso;
  acertos!: number;
  nivel!: Nivel;
  erros!: number;
}
