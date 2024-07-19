import { Tags } from "../enum/Tags";
import { Curso } from "../enum/curso";
import { UsuarioResponse } from "./usuarioResponse";

export class PerguntaResponse{
  perguntaId !: String ;
  curso !: Curso;
  usuario!: UsuarioResponse;
  titulo !: String;
  detalhes !: String;
  tags : Tags[] = [];
  status !: boolean;
  dataCriado !: Date
}
