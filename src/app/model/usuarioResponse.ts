import { Curso } from './curso';
import { TipoUsuario } from './tipoUsuario';


export class UsuarioResponse {
  //  usuarioId?: UUID;
   usuarioId!: string;
   nome!: string;
   username!: string;
   email!: String;
   emailValido!:boolean;
   dataNascimento!: Date;
   curso!:Curso;
   tipoUsuario!:TipoUsuario;
   dataCriado!: Date;

}
