import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from "./pages/pages.module";
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PagesModule, NgxUiLoaderModule]
})
export class AppComponent {
  title = 'front';
}
