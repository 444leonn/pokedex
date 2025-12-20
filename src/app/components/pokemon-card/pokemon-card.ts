import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard implements OnInit {
  name?: string | null;
  pokemon?: Pokemon;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.name) {
      this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .subscribe(data => {
        this.pokemon = data;
      });
    }
  }
}