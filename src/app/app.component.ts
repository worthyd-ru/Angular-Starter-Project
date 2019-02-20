import { Component } from '@angular/core';
import { VERSION } from '../environments/version';
import { PokemonService } from './_providers/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Starter Project';
  appVersion = VERSION.version;
  allPokemon = [];

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAllPokemon(20)
      .subscribe((result: any) => this.allPokemon = result.results);
  }

}
