import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EmailComponent } from './pages/email/email.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InfoBasicoComponent } from './pages/main/info/info-basico/info-basico.component';
import { QuizComponent } from './pages/quiz/quiz.component';

export const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'email' , component: EmailComponent},
  {path: 'main' , component: InfoBasicoComponent},
  {path: 'perfil' , component: PerfilComponent},
  {path: 'menu' , component: MenuComponent},
  {path: 'quiz', component: QuizComponent}



];
