import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { PokemonView } from '../pokemon-view';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent extends PokemonView implements OnInit {
  @Input() name?: string;

  constructor(apiService: ApiService, private router: Router) {
    super(apiService);
  }

  ngOnInit(): void {
    this.getPokemon(this.name ?? "");
  }


  openDetails():void {
    this.router.navigate([`/pokemon/${this?.pokemon?.name}`])
  }
}
