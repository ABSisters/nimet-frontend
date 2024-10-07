import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { PagesModule } from "./pages/pages.module";
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PagesModule, NgxUiLoaderModule]
})
export class AppComponent implements OnInit {
  constructor(private ngxService: NgxUiLoaderService, private router: Router) {}

  title = 'nimet';

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.ngxService.start(); // Inicia o loader
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.ngxService.stop(); // Para o loader
      }
    });
  }
}

