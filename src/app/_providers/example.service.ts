import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  API_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {
  }

  getAllPokemon(limit: number) {
    const url = `${ this.API_URL }/?limit=${ limit }`;
    return this.http.get(url);
  }

  getPokemonDetails(pokemonId: string) {
    const url = `${ this.API_URL }/${pokemonId}`;
    return this.http.get(url);
  }

}
