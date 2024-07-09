import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EmailComponent } from './pages/email/email.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InfoBasicoComponent } from './pages/main/info/info-basico/info-basico.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { UsuarioAutenticadoGuard } from './service/guards/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './service/guards/usuario-nao-autenticado.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'email', component: EmailComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'main', component: InfoBasicoComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'quiz', component: QuizComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: '**', redirectTo: '' }  // Redireciona qualquer rota não encontrada para a página de login
];
