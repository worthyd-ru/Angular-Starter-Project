import { Component, Input, OnInit } from '@angular/core';
import { ExampleService } from '../../_providers/example.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: any;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
    this.exampleService.getPokemonDetails(this.getPokemonIdFromUrl(this.pokemon.url))
      .subscribe((result: any) => this.pokemon = result);
  }

  onItemClick(pokemon) {
    console.log('pokemon', pokemon);
  }

  getPokemonIdFromUrl(url: string) {
    const splitUrl = url.split('/');
    return splitUrl[splitUrl.length - 2];
  }

}
