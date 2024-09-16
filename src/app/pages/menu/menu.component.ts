
import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { CadastroService } from '../../service/usuario/cadastro/cadastro.service';
import { UsuarioResponse } from '../../model/response/usuarioResponse';
import { Curso } from '../../model/enum/curso';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user!: UsuarioResponse;
  isExpanded = false;

  constructor(private usuarioService: UsuarioService, private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.usuarioService.getUsuario();
  }

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;

  deslogar() {
    this.cadastroService.deslogar();
  }
  perfil() {
    this.router.navigate(['perfil']);
  }
  forum() {
    this.router.navigate(['forum']);
  }
  quiz() {
    this.router.navigate(['quiz']);
  }

  curso(){
    this.router.navigate(['main/info/basic'])
  }
//   curso(curso: Curso) {
//     const cursoString = getCursoString(curso);
//     if (cursoString === 'INFORMATICA') {
//       this.router.navigate(['main/info/basic']);
//     } else if (cursoString === 'MECANICA') {
//       this.router.navigate(['main/mec/basic']);
//     } else if (cursoString === 'ELETRONICA') {
//       this.router.navigate(['main/ele/basic']);
//     } else {
//       console.error('Curso não encontrado');
//     }
//   }
// }

// function getCursoString(curso: Curso): string {
//   switch (curso) {
//     case Curso.ELETRONICA:
//       return 'ELETRONICA';
//     case Curso.INFORMATICA:
//       return 'INFORMATICA';
//     case Curso.MECANICA:
//       return 'MECANICA';
//     default:
//       return '';
//   }


}
