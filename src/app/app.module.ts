import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrganiserLoginComponent } from './organiser-login/organiser-login.component';
import { OrganiserRegisterComponent } from './organiser-register/organiser-register.component';
import { PlayerRegisterComponent } from './player-register/player-register.component';
import { PlayerLoginComponent } from './player-login/player-login.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { OrganiserDashboardComponent } from './organiser-dashboard/organiser-dashboard.component';
import { HomeComponent } from './home/home.component';
import { application } from 'express';
import { GamesComponent } from './games/games.component';

const appRoutes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'games', component : GamesComponent},
  {path : 'organiser/register', component : OrganiserRegisterComponent},
  {path : 'organiser/login', component : OrganiserLoginComponent},
  {path : 'player/login', component : PlayerLoginComponent},
  {path : 'player/register', component : PlayerRegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrganiserLoginComponent,
    OrganiserRegisterComponent,
    PlayerRegisterComponent,
    PlayerLoginComponent,
    PlayerDashboardComponent,
    OrganiserDashboardComponent,
    HomeComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
