import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmailComponent } from './email/email.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
import { EleBasicoComponent } from './main/ele/ele-basico/ele-basico.component';
import { EleMedioComponent } from './main/ele/ele-medio/ele-medio.component';
import { EleAvancadoComponent } from './main/ele/ele-avancado/ele-avancado.component';
import { InfoBasicoComponent } from './main/info/info-basico/info-basico.component';
import { InfoIntermediarioComponent } from './main/info/info-intermediario/info-intermediario.component';
import { InfoAvancadoComponent } from './main/info/info-avancado/info-avancado.component';
import { MecBasicoComponent } from './main/mec/mec-basico/mec-basico.component';
import { MecIntermediarioComponent } from './main/mec/mec-intermediario/mec-intermediario.component';
import { MecAvancadoComponent } from './main/mec/mec-avancado/mec-avancado.component';
import { QuizComponent } from './quiz/quiz.component';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    EmailComponent,
    PerfilComponent,
    EleBasicoComponent,
    EleMedioComponent,
    EleAvancadoComponent,
    InfoBasicoComponent,
    InfoIntermediarioComponent,
    InfoAvancadoComponent,
    MecBasicoComponent,
    MecIntermediarioComponent,
    MecAvancadoComponent,
    MenuComponent,
    QuizComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ToastModule,
    ChartModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
      MenuComponent 
    ]

})
export class PagesModule { }
