import { Tags } from "../enum/Tags";

export class PerguntaPostRequest{
  usuarioId: String = '';
  titulo: String = '';
  detalhes: String = '';
  tags: Tags[] = [];

}
