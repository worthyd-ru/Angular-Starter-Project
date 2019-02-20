import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) {
  }

  getAllPokemon(limit: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${ limit }`;
    return this.http.get(url);
  }

}
