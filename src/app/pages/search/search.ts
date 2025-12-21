import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { PokemonCardSearch } from "../../components/pokemon-card-search/pokemon-card-search";

@Component({
  selector: 'search',
  imports: [Navbar, Footer, PokemonCardSearch],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  pokemonName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pokemonName = params.get('name') || '';
    });
  }
}