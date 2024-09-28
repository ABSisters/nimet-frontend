

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioResponse } from '../../../model/response/usuarioResponse';
import { Curso } from '../../../model/enum/curso';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-curso-basico',
  templateUrl: './curso-basico.component.html',
  styleUrls: ['./curso-basico.component.scss']

})
export class CursoBasicoComponent {

  basicData: any;
  user!: UsuarioResponse;
  basicOptions: any;

  public Curso = Curso;
items: MenuItem[]|undefined;
style: any;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

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
                    label: 'Nivel Avançado',
                    command: () => {
                      this.router.navigate(['curso/avancado']);
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

  intermediario() {
    this.router.navigate(['curso/intermediario'])
  }

  avancado() {
    this.router.navigate(['curso/avancado'])
  }

}
