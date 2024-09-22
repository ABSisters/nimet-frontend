import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioResponse } from '../../../model/response/usuarioResponse';
import { Curso } from '../../../model/enum/curso';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-curso-intermediario',
  templateUrl: './curso-intermediario.component.html',
  styleUrls: ['./curso-intermediario.component.scss']
})
export class CursoIntermediarioComponent {

  basicData: any;
  user!: UsuarioResponse;
  basicOptions: any;

  public Curso = Curso;
items: MenuItem[]|undefined;

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
                label: 'Quiz',
                icon: 'pi pi-stopwatch',
                command: () => {
                  this.router.navigate(['quiz']);
              },
              styleClass: 'menucus'
            },
            {
              label: 'Nivel Intermediário',
              icon: 'pi pi-angle-right',
              styleClass: 'menucus',
              items: [
                  {
                      label: 'Nivel Básico',
                      command: () => {
                        this.router.navigate(['curso/basico']);
                    },
                  },
                  {
                      label: 'Nivel Avançado',
                      command: () => {
                        this.router.navigate(['curso/avancado']);
                    },
                  },
                ]
              }
    ]
  }


  forum() {
    this.router.navigate(['forum']);
  }
  quiz() {
    this.router.navigate(['quiz']);
  }

  basico() {
    this.router.navigate(['curso/basico'])
  }

  avancado() {
    this.router.navigate(['curso/avancado'])
  }

}
