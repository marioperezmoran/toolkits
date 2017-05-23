import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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

import { routing, appRoutingProviders } from './app.routes';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';

import { ToolkitComponent } from './toolkit/toolkit.component';
import { MenuComponent } from './menu/menu.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCdncPXjVGS8UVwWM1eBA-n2N4zy9hYSc8",
    authDomain: "toolkits-f3591.firebaseapp.com",
    databaseURL: "https://toolkits-f3591.firebaseio.com",
    projectId: "toolkits-f3591",
    storageBucket: "toolkits-f3591.appspot.com",
    messagingSenderId: "352097102205"
};

@NgModule({
  declarations: [
    AppComponent,
    ToolkitComponent,
    MenuComponent,
    LoginComponent,
    IntroComponent,
    OverviewComponent,
    JourneyComponent,
    JourneyMenuComponent,
    Journey01Component,
    Journey02Component,
    Journey03Component,
    Journey04Component,
    Journey05Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    Ng2SimplePageScrollModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }

