import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon;

  constructor() {
  }

  ngOnInit() {
  }

  onItemClick(pokemon) {
    console.log('pokemon', pokemon);
  }

}
