export interface Sprites {
  front_default: string | null;
  back_default: string | null;
  front_shiny: string | null;

  other?: {
    'official-artwork'?: {
      front_default: string | null;
    };
  };
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonTypeData {
  name: string;
  pokemon: {
    pokemon: {
      name: string;
      url: string;  
    };
    slot: number;
  }[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  ability: NamedAPIResource;
}

export interface PokemonStat {
  base_stat: number;
  stat: NamedAPIResource;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}
