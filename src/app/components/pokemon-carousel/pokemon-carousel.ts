import { Component } from '@angular/core';
import { PokemonCard } from "../pokemon-card/pokemon-card";

@Component({
  selector: 'app-pokemon-carousel',
  imports: [PokemonCard],
  templateUrl: './pokemon-carousel.html',
  styleUrl: './pokemon-carousel.css',
})
export class PokemonCarousel {

}
