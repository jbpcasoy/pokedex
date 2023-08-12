import { Component, Input, OnInit } from '@angular/core';
import { PokemonAbility } from '../pokemon-ability';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss'],
})
export class AbilityComponent implements OnInit {
  @Input() ability?: string;
  @Input() hidden?: boolean;
  @Input() color?: string;
  
  pokemonAbility?: PokemonAbility;
  effect?: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAbility(this.ability ?? '').subscribe({
      next: (pokemonAbility: PokemonAbility) => {
        this.pokemonAbility = pokemonAbility;
        this.effect = pokemonAbility.effect_entries.find(
          (effect) => effect.language.name === 'en'
        )?.effect;
      },
      error: (error: any) => {
        // TODO handle error
      },
    });
  }
}
