import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { WeaknessComponent } from './weakness/weakness.component';
import { AbilityComponent } from './ability/ability.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PokemonComponent, PokemonPageComponent, ProgressBarComponent, WeaknessComponent, AbilityComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
