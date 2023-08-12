import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PokemonType } from '../pokemon-type';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.scss'],
})
export class WeaknessComponent implements OnInit {
  @Input() types: string[] = [];
  pokemonTypes: PokemonType[] = [];
  typeWeaknesses: { [key: string]: number } = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log({ types: this.types });
    const observables = this.types.map((type) => this.apiService.getType(type));

    forkJoin(observables).subscribe({
      next: (pokemonTypes: PokemonType[]) => {
        pokemonTypes.forEach((pokemonType) => {
          this.calculateWeaknesses(pokemonType);
          this.pokemonTypes.push(pokemonType);
        });
      },
      error: (error: any) => {
        console.error('API Error: ', error);
      },
    });
  }

  typeNames: string[] = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ];

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

  getTypeColor(type: string) {
    return this.typeColors[type];
  }

  calculateWeaknesses(type: PokemonType) {
    for (let doubleWeakness of type.damage_relations.double_damage_from) {
      this.typeWeaknesses[doubleWeakness.name] =
        this.typeWeaknesses[doubleWeakness.name] * 2;
      console.log({
        name: doubleWeakness.name,
        value: this.typeWeaknesses[doubleWeakness.name],
      });
    }
    for (let halfWeakness of type.damage_relations.half_damage_from) {
      this.typeWeaknesses[halfWeakness.name] =
        this.typeWeaknesses[halfWeakness.name] * 0.5;
    }
    for (let noWeakness of type.damage_relations.no_damage_from) {
      this.typeWeaknesses[noWeakness.name] =
        this.typeWeaknesses[noWeakness.name] * 0;
    }
  }
}
