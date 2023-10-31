export interface Pokemon {
  abilities: Abilities[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: any;
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
}

interface Abilities {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}
interface Ability {
  name: string;
  url: string;
}
