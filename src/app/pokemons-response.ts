import { Pokemon } from './pokemon';

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
}