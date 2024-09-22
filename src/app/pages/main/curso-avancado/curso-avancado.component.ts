import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { UsuarioResponse } from '../../../model/response/usuarioResponse';
import { Curso } from '../../../model/enum/curso';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-curso-avancado',
  templateUrl: './curso-avancado.component.html',
  styleUrls: ['./curso-avancado.component.scss']
})
export class CursoAvancadoComponent {
  basicData: any;
  user!: UsuarioResponse;
  basicOptions: any;

  public Curso = Curso;
items: MenuItem[]|undefined;


  constructor(private router: Router,private usuarioService: UsuarioService){}


  ngOnInit() {
    this.user = this.usuarioService.getUsuario();
    console.log(this.user);

    this.items = [
            {
                label: 'Forum',
                icon: 'pi pi-comments',
                command: () => {
                  this.router.navigate(['forum']);
              },
              styleClass: 'menucus'
           },
            {
              label: 'Nivel Básico',
              icon: 'pi pi-angle-right',
              styleClass: 'menucu',
              items: [
                  {
                      label: 'Nivel Intermediário',
                      command: () => {
                        this.router.navigate(['curso/intermediario']);
                    },
                  },
                  {
                      label: 'Nivel Básico',
                      command: () => {
                        this.router.navigate(['curso/basico']);
                    },
                  },
                ]
              },
              {
                label: 'Quiz',
                icon: 'pi pi-stopwatch',
                command: () => {
                  this.router.navigate(['quiz']);
              },
              styleClass: 'menucus'
            }
    ]
  }

  forum() {
    this.router.navigate(['forum']);
  }
  quiz() {
    this.router.navigate(['quiz']);
  }

  basico(){
    this.router.navigate(['curso/basico'])
  }

  intermediario(){
    this.router.navigate(['curso/intermediario'])
  }

}
