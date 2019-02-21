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
  fakeSideMenuItems = [
    {
      name: 'Home',
      icon: 'home'
    },
    {
      name: 'News',
      icon: 'view_quilt'
    },
    {
      name: 'Profile',
      icon: 'person'
    },
    {
      name: 'Settings',
      icon: 'settings'
    },
  ];

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAllPokemon(20)
      .subscribe((result: any) => this.allPokemon = result.results);
  }

  toggleSideMenu(sideMenu: any) {
    sideMenu.toggle();
  }

}
