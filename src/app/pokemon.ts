import { PokemonSprite } from './pokemon-sprite';

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprite;
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  species: {
    name: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
