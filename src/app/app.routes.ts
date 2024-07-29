import { Component } from '@angular/core';
import { EleMedioComponent } from './pages/main/ele/ele-medio/ele-medio.component';
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
import { ForumComponent } from './pages/forum/forum/forum.component';
import { AdicionarPerguntaComponent } from './pages/forum/adicionar-pergunta/adicionar-pergunta.component';
import { RespostaComponent } from './pages/forum/resposta/resposta.component';
import { InfoIntermediarioComponent } from './pages/main/info/info-intermediario/info-intermediario.component';
import { InfoAvancadoComponent } from './pages/main/info/info-avancado/info-avancado.component';
import { MecBasicoComponent } from './pages/main/mec/mec-basico/mec-basico.component';
import { MecIntermediarioComponent } from './pages/main/mec/mec-intermediario/mec-intermediario.component';
import { MecAvancadoComponent } from './pages/main/mec/mec-avancado/mec-avancado.component';
import { EleBasicoComponent } from './pages/main/ele/ele-basico/ele-basico.component';
import { EleAvancadoComponent } from './pages/main/ele/ele-avancado/ele-avancado.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'email', component: EmailComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  // {path: 'main',
  //   canActivate: [UsuarioAutenticadoGuard],
  //   children: [
  //     { path: 'basico', component: InfoBasicoComponent },
  //     { path: 'intermediario', component: InfoIntermediarioComponent },
  //     { path: 'avancado', component: InfoAvancadoComponent },
  //   ],
  // },
  {path: 'main',
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      {path: 'mec',
        canActivate: [UsuarioAutenticadoGuard],
        children: [
          { path: 'basic', component: MecBasicoComponent },
          { path: 'inter', component: MecIntermediarioComponent },
          { path: 'advanced', component: MecAvancadoComponent },
        ],
      },
      {path: 'info', component: InfoBasicoComponent,
        canActivate: [UsuarioAutenticadoGuard],
        children: [
          { path: 'basic', component: InfoBasicoComponent },
          { path: 'inter', component:InfoIntermediarioComponent  },
          { path: 'advanced', component: InfoAvancadoComponent }
        ],
      },
      {path: 'ele',
        canActivate: [UsuarioAutenticadoGuard],
        children: [
          { path: 'basic', component: EleBasicoComponent },
          { path: 'inter', component:EleMedioComponent  },
          { path: 'advanced', component: EleAvancadoComponent },
        ],
      }
    ],
  },
  { path: 'perfil', component: PerfilComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'quiz', component: QuizComponent, canActivate: [UsuarioAutenticadoGuard] },
  { path: 'forum', component: ForumComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: 'adicionar-pergunta', component: AdicionarPerguntaComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: 'resposta', component: RespostaComponent, canActivate: [UsuarioAutenticadoGuard]},
  { path: '**', redirectTo: '/main' }  // Redireciona qualquer rota não encontrada para a página de login
];
