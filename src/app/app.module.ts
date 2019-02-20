import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material';
import { PipesModule } from './_pipes/pipes-module';
import { PokemonService } from './_providers/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListItemComponent } from './_components/pokemon-list-item/pokemon-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMaterialModule, // HAS TO BE AFTER BrowserModule
    AppRoutingModule,
    PipesModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
