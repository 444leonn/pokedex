import { Sprites } from "./aux.model";
import { PokemonType } from "./aux.model";
import { PokemonAbility } from "./aux.model";
import { PokemonStat } from "./aux.model";

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;

  sprites: Sprites;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}
