import { Curso } from "../enum/curso";
import { Nivel } from "../enum/nivel";
import { Opcao } from "../enum/opcao";

export class QuestaoResponse{
  questaoId!: string;
  curso!: Curso;
  nivel!: Nivel;
  questao!: string;
  opcoes!: Opcao[];
}

