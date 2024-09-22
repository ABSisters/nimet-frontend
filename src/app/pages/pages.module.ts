import { CUSTOM_ELEMENTS_SCHEMA, NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmailComponent } from './email/email.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
import { CursoIntermediarioComponent } from './main/curso-intermediario/curso-intermediario.component';
import { CursoAvancadoComponent } from './main/curso-avancado/curso-avancado.component';
import { QuizComponent } from './quiz/quiz.component';
import { ForumComponent } from './forum/forum/forum.component';
import { AdicionarPerguntaComponent } from './forum/adicionar-pergunta/adicionar-pergunta.component';
import { RespostaComponent } from './forum/resposta/resposta.component';
import { SenhaComponent } from './senha/senha.component';
import { CursoBasicoComponent } from './main/curso-basico/curso-basico.component';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    EmailComponent,
    PerfilComponent,
    CursoBasicoComponent,
    CursoIntermediarioComponent,
    CursoAvancadoComponent,
    MenuComponent,
    QuizComponent,
    ForumComponent,
    AdicionarPerguntaComponent,
    RespostaComponent,
    ForumComponent,
    SenhaComponent

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
    ],
    // providers: [
    //   {
    //     provide: NG_VALUE_ACCESSOR,
    //     useExisting: forwardRef(() => MyInputField),
    //     multi: true,
    //   }
    // ]

})
export class PagesModule { }
