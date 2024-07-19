import { Component, OnInit, ViewChild  } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { CadastroService } from '../../service/usuario/cadastro/cadastro.service';
import { UsuarioResponse } from '../../model/response/usuarioResponse';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  user!: UsuarioResponse;
  isExpanded = false;

  constructor (private usuarioService: UsuarioService, private cadastroService: CadastroService, private router: Router){}

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

  deslogar(){
    this.cadastroService.deslogar();
  }
  perfil(){
    this.router.navigate(['perfil']);
  }
  forum(){
    // this.router.navigate(['forum']);
  }
  quiz(){
    this.router.navigate(['quiz']);
  }

}
