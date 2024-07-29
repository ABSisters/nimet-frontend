import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CadastroService } from '../usuario/cadastro/cadastro.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate {

  constructor(private cadastroService: CadastroService, private router: Router) {}

  canActivate(): boolean {
    if (this.cadastroService.logado) {
      this.router.navigate(['main/info']);
      return false;
    }
    return true;
  }
}
