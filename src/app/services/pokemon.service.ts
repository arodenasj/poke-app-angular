import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}
export interface PokemonListItem {
  name: string;
  url: string;
}
export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  getPokemons(limit: number=20, offset: number=0): Observable<PokemonListResponse> {
    const url = `${this.apiUrl}pokemon?limit=${limit}&offset=${offset}`;
    console.log("Llamando a la API de Pokemon: ", url);
    return this.http.get<PokemonListResponse>(url);
  }
  getPokemonDetail(name: string): Observable<PokemonDetail> {
    const url = `${this.apiUrl}pokemon/${name}`;
    console.log("Llamando a la API de Pokemon (Detalles): ", url);
    return this.http.get<PokemonDetail>(url);
  }

}
