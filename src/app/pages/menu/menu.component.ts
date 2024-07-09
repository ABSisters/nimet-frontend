import { CadastroService } from './../../service/cadastro.service';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { UsuarioService } from '../../service/usuario.service';
import { UsuarioResponse } from '../../model/usuarioResponse';
import { Router } from '@angular/router';

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
