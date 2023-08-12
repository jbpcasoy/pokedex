import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonView } from '../pokemon-view';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
})
export class PokemonPageComponent extends PokemonView implements OnInit {
  name?: string | null;
  tab: 'stats' | 'evolution' | 'moves' = 'stats';

  constructor(apiService: ApiService, private route: ActivatedRoute) {
    super(apiService);
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getPokemon(this.name ?? '');
  }

  setTab(tab: 'stats' | 'evolution' | 'moves') {
    this.tab = tab;
  }

  shorten(stat: string) {
    switch (stat) {
      case 'hp': {
        return 'HP';
      }
      case 'attack': {
        return 'ATK';
      }
      case 'defense': {
        return 'DEF';
      }
      case 'special-attack': {
        return 'SATK';
      }
      case 'special-defense': {
        return 'SDEF';
      }
      case 'speed': {
        return 'SPD';
      }
      default: {
        return 'Unknown';
      }
    }
  }
}
