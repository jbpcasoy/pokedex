export interface PokemonAbility {
  id: number;
  name: string;
  effect_entries: {
    effect: string;
    language: {
      name: string;
    };
  }[];
}
