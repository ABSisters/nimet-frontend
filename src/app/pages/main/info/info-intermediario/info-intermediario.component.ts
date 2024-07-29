import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-intermediario',
  templateUrl: './info-intermediario.component.html',
  styleUrls: ['./info-intermediario.component.scss']
})
export class InfoIntermediarioComponent {

  basicData: any;

  basicOptions: any;

  constructor(private router: Router){}

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
          labels: ['Linguagem de Programação', 'Lógica de Programação', 'Aplicacoes Web', 'Banco de Dados'],
          datasets: [
              {
                  data: [70, 55, 40, 35],
                  label: 'Materias',
                  backgroundColor: ['rgb(198, 24, 255, 0.4)', 'rgba(198, 64, 255, 0.4)', 'rgba(198, 74, 255, 0.3)','rgba(198, 84, 255, 0.2)'],
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

  basico(){
    this.router.navigate(['main/info/basic'])
  }

  avancado(){
    this.router.navigate(['main/info/advanced'])
  }

}
