import { PerguntaResponse } from "./perguntaResponse";
import { UsuarioResponse } from "./usuarioResponse";

export class RespostaResponse{
 respostaId!: String;
 usuario!: UsuarioResponse;
 pergunta!: PerguntaResponse;
 resposta!: String;
 dataCriado!: Date;

}
