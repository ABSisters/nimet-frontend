import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importe CUSTOM_ELEMENTS_SCHEMA
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importe BrowserAnimationsModule
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import { ChartModule } from 'primeng/chart';
import { MenuComponent } from './pages/menu/menu.component';
import { CadastroService } from './service/usuario/cadastro/cadastro.service';
import { NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { RouterModule } from '@angular/router';
// import { CriptHttpInterceptorTsComponent } from './interceptor/cript-http.interceptor.ts/cript-http.interceptor.ts.component';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    "bgsColor": "#e6d9ec",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "#4f1964",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "double-bounce",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(79,25,100,0.26)",
    "pbColor": "red",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
  }


@NgModule({
  declarations: [
    // CriptHttpInterceptorTsComponent
  ],
  imports: [
    CommonModule,
    AppComponent,
    PagesModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ChartModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule


  ],
  providers: [
    CadastroService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
