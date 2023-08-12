import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PokemonsResponse } from '../pokemons-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  data?: PokemonsResponse;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPokemons().subscribe({next:(data: PokemonsResponse) => {
      this.data = data
    }, error:(error: any) => {
      // TODO handle error
    }})
  }

  next():void {
    if(!this.data) return;
    this.apiService.getPokemons(this.data.next).subscribe({next:(data: PokemonsResponse) => {
      this.data = data
    }, error:(error: any) => {
      // TODO handle error
    }})
  }
  previous():void {
    if(!this.data) return;
    this.apiService.getPokemons(this.data.previous).subscribe({next:(data: PokemonsResponse) => {
      this.data = data
    }, error:(error: any) => {
      // TODO handle error
    }})
  }
}
