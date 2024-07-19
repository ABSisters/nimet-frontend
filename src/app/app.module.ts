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







@NgModule({
  declarations: [



  ],
  imports: [
    CommonModule,
    PagesModule,
    AppComponent,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,


  ],
  providers: [
    CadastroService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
