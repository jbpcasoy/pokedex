import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { PokemonsResponse } from './pokemons-response';
import { Pokemon } from './pokemon';
import { PokemonSpecies } from './pokemon-species';
import { PokemonType } from './pokemon-type';
import { PokemonAbility } from './pokemon-ability';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(
    url: string = `${this.apiUrl}/pokemon`
  ): Observable<PokemonsResponse> {
    return this.http.get<PokemonsResponse>(url).pipe(
      catchError((error: any) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }
  getPokemon(name: string): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/${name}`;
    return this.http.get<Pokemon>(url).pipe(
      catchError((error: any) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }

  getSpecies(name: string): Observable<PokemonSpecies> {
    const url = `${this.apiUrl}/pokemon-species/${name}`;
    return this.http.get<PokemonSpecies>(url).pipe(
      catchError((error: any) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }

  getType(name: string) {
    const url = `${this.apiUrl}/type/${name}`;
    return this.http.get<PokemonType>(url).pipe(
      catchError((error: any) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }

  getAbility(name: string) {
    const url = `${this.apiUrl}/ability/${name}`;
    return this.http.get<PokemonAbility>(url).pipe(catchError((error: any) => {
      console.error("API Error:", error);
      throw error;
    }))
  }
}
