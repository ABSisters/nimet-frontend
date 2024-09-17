import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EmailComponent } from './pages/email/email.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CursoBasicoComponent} from './pages/main/curso-basico/curso-basico.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { UsuarioAutenticadoGuard } from './service/guards/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './service/guards/usuario-nao-autenticado.guard';
import { ForumComponent } from './pages/forum/forum/forum.component';
import { AdicionarPerguntaComponent } from './pages/forum/adicionar-pergunta/adicionar-pergunta.component';
import { RespostaComponent } from './pages/forum/resposta/resposta.component';
import { CursoIntermediarioComponent } from './pages/main/curso-intermediario/curso-intermediario.component';
import { CursoAvancadoComponent } from './pages/main/curso-avancado/curso-avancado.component';
import { SenhaComponent } from './pages/senha/senha.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'email', component: EmailComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  {path: 'curso',
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: 'basico', component: CursoBasicoComponent },
      { path: 'intermediario', component: CursoIntermediarioComponent },
      { path: 'avancado', component: CursoAvancadoComponent },
    ],
  },
  { path: 'perfil', component: PerfilComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'quiz', component: QuizComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'forum', component: ForumComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: 'adicionar-pergunta', component: AdicionarPerguntaComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: 'resposta', component: RespostaComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: 'senha', component: SenhaComponent, canActivate: [UsuarioAutenticadoGuard]},
  // { path: '**', redirectTo: '/curso/basico' }  // Redireciona qualquer rota não encontrada para a página de login
];


// {path: 'main',
//   canActivate: [UsuarioAutenticadoGuard],
//   children: [
//     {path: 'mec',
//       canActivate: [UsuarioAutenticadoGuard],
//       children: [
//         { path: 'basic', component: MecBasicoComponent },
//         { path: 'inter', component: MecIntermediarioComponent },
//         { path: 'advanced', component: MecAvancadoComponent },
//       ],
//     },
//     {path: 'info',
//       canActivate: [UsuarioAutenticadoGuard],
//       children: [
//         { path: 'basic', component: InfoBasicoComponent },
//         { path: 'inter', component:InfoIntermediarioComponent  },
//         { path: 'advanced', component: InfoAvancadoComponent }
//       ],
//     },
//     {path: 'ele',
//       canActivate: [UsuarioAutenticadoGuard],
//       children: [
//         { path: 'basic', component: EleBasicoComponent },
//         { path: 'inter', component:EleMedioComponent  },
//         { path: 'advanced', component: EleAvancadoComponent },
//       ],
//     }
//   ],
// },
