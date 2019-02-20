import { Component, Input, OnInit } from '@angular/core';
import { ExampleService } from '../../_providers/example.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: any;
  snackBarConfig = new MatSnackBarConfig();

  constructor(private exampleService: ExampleService,
              private snackbar: MatSnackBar) {
    this.snackBarConfig.duration = 2500;
  }

  ngOnInit() {
    this.exampleService.getPokemonDetails(this.getPokemonIdFromUrl(this.pokemon.url))
      .subscribe((result: any) => this.pokemon = result);
  }

  onItemClick(pokemon) {
    this.snackbar.open(`Clicked on ${ pokemon.name }`, null, this.snackBarConfig);
  }

  getPokemonIdFromUrl(url: string) {
    const splitUrl = url.split('/');
    return splitUrl[splitUrl.length - 2];
  }

}
