import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { CreatePlayersComponent } from './players/create-players/create-players.component';
import { PlayerService } from './players/player.service';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreatePlayersComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    PlayersComponent,
    CreatePlayersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
