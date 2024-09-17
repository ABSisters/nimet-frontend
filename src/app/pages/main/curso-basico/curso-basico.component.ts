

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioResponse } from '../../../model/response/usuarioResponse';
import { Curso } from '../../../model/enum/curso';
import { UsuarioService } from '../../../service/usuario/usuario.service';

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

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.user = this.usuarioService.getUsuario();
    console.log(this.user);

    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Linguagem de Programação', 'Lógica de Programação', 'Aplicacoes Web', 'Banco de Dados'],
      datasets: [
        {
          data: [70, 55, 40, 35],
          label: 'Materias',
          backgroundColor: ['rgb(198, 24, 255, 0.4)', 'rgba(198, 64, 255, 0.4)', 'rgba(198, 74, 255, 0.3)', 'rgba(198, 84, 255, 0.2)'],
          borderColor: ['rgb(186, 70, 232)', 'rgb(186, 79, 218)', 'rgb(163, 81, 195)', 'rgb(198, 54, 255)'],
          pointBorderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          barThickness: 120,
          // maxBarThickness: 30 // Defina um limite máximo para a espessura das barras
        }
      ]
    };

    this.basicOptions = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
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
