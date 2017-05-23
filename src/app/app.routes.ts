import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { OverviewComponent } from './overview/overview.component';
import { JourneyComponent } from './journey/journey.component';

import { JourneyMenuComponent } from './journey/journey-menu/journey-menu.component';

import { Journey01Component } from './journey/journey01/journey01.component';
import { Journey02Component } from './journey/journey02/journey02.component';
import { Journey03Component } from './journey/journey03/journey03.component';
import { Journey04Component } from './journey/journey04/journey04.component';
import { Journey05Component } from './journey/journey05/journey05.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'journey', component: JourneyComponent,
    children: [
      {path: '', redirectTo: 'discovery', pathMatch: 'full'},
      { path: 'discovery', component: Journey01Component},
      { path: 'diagnose', component: Journey02Component},
      { path: 'translate', component: Journey03Component},
      { path: 'plan', component: Journey04Component},
      { path: 'evolve', component: Journey05Component}
    ]
  },
  { path: 'login', component: LoginComponent}
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes);