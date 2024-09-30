import { PerguntaResponse } from "./perguntaResponse";
import { UsuarioResponse } from "./usuarioResponse";

export class RespostaResponse{
 respostaId!: string;
 usuario!: UsuarioResponse;
 pergunta!: PerguntaResponse;
 resposta!: string;
 dataCriado!: Date;

}
