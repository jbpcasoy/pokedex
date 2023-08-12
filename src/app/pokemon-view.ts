import { ApiService } from './api.service';
import { Pokemon } from './pokemon';
import { PokemonSpecies } from './pokemon-species';

export class PokemonView {
  pokemon?: Pokemon;
  species?: PokemonSpecies;
  description?: string;
  color: string = 'rgba(255, 255, 255, 0)';
  types?: string[];
  typeColors: { [key: string]: string } = {
    normal: 'rgba(168, 168, 120, 1)',
    fire: 'rgba(240, 128, 48, 1)',
    water: 'rgba(104, 144, 240, 1)',
    electric: 'rgba(248, 208, 48, 1)',
    grass: 'rgba(120, 200, 80, 1)',
    ice: 'rgba(152, 216, 216, 1)',
    fighting: 'rgba(192, 48, 40, 1)',
    poison: 'rgba(160, 64, 160, 1)',
    ground: 'rgba(224, 192, 104, 1)',
    flying: 'rgba(168, 144, 240, 1)',
    psychic: 'rgba(248, 88, 136, 1)',
    bug: 'rgba(168, 184, 32, 1)',
    rock: 'rgba(184, 160, 56, 1)',
    ghost: 'rgba(112, 88, 152, 1)',
    dragon: 'rgba(112, 56, 248, 1)',
    dark: 'rgba(112, 88, 72, 1)',
    steel: 'rgba(184, 184, 208, 1)',
    fairy: 'rgba(238, 153, 172, 1)',
  };
  pokemonColors: { [key: string]: string } = {
    black: 'rgba(45, 45, 45, 0.9)',
    blue: 'rgba(135, 206, 235, 0.9)',
    brown: 'rgba(210, 180, 140, 0.9)',
    gray: 'rgba(192, 192, 192, 0.9)',
    green: 'rgba(144, 238, 144, 0.9)',
    pink: 'rgba(255, 182, 193, 0.9)',
    purple: 'rgba(216, 191, 216, 0.9)',
    red: 'rgba(255, 160, 122, 0.9)',
    white: 'rgba(243, 243, 243, 1)',
    yellow: 'rgba(255, 217, 102, 0.9)',
  };

  constructor(private apiService: ApiService) {}

  getPokemon(name: string) {
    this.apiService.getPokemon(name).subscribe({
      next: (pokemon: Pokemon) => {
        this.pokemon = pokemon;
        this.types = pokemon.types.map((type) => type.type.name);
        this.getSpecies();
      },
      error: (error: any) => {
        // TODO handle error
      },
    });
  }

  randomFact() {
    interface FlavorText {
      language: {
        name: string;
      };
      flavor_text: string;
    }
    let newDescription: FlavorText | undefined;

    while (newDescription?.language?.name !== 'en') {
      newDescription = this.species?.flavor_text_entries?.at(
        Math.random() * this.species.flavor_text_entries.length
      );
    }

    this.description = newDescription.flavor_text.replace(/[\n\f]/g, ' ');
  }

  getTypeColor(type: string) {
    return this.typeColors[type];
  }

  getSpecies() {
    this.apiService.getSpecies(this?.pokemon?.species?.name || '').subscribe({
      next: (species: PokemonSpecies) => {
        this.species = species;
        const entry = species.flavor_text_entries.find(
          (entry) => entry.language.name === 'en'
        );
        this.description = entry?.flavor_text.replace(/[\n\f]/g, ' ');

        this.color = this.pokemonColors[species.color.name];
      },
      error: (error: any) => {
        // TODO handle error
      },
    });
  }
}
