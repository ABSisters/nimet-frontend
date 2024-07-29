import { Component } from '@angular/core';

@Component({
  selector: 'app-info-avancado',
  templateUrl: './info-avancado.component.html',
  styleUrls: ['./info-avancado.component.scss']
})
export class InfoAvancadoComponent {
  basicData: any;

  basicOptions: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
          labels: ['Logica de Programação', 'Linguagem de programacao', 'Segurança da Informação', 'Desenvolvimento de Sistemas'],
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

}
