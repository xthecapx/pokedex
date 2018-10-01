import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static readonly ENDPOINT = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(ApiService.ENDPOINT + 'pokemon/');
  }
}
