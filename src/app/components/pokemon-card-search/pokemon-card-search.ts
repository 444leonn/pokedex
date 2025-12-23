import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pokemon-card-search',
  imports: [RouterLink],
  templateUrl: './pokemon-card-search.html',
  styleUrl: './pokemon-card-search.css',
})
export class PokemonCardSearch implements OnInit, OnChanges {
  @Input() name?: string | null;
  pokemon?: Pokemon | undefined;
  loading: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && !changes['name'].firstChange) {
      this.loadPokemon();
    }
  }

  private loadPokemon(): void {
    if (this.name) {
      this.loading = true;
      this.error = false;
      this.pokemon = undefined;
      
      this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .subscribe({
        next: (response) => {
          console.log(this.name);
          console.log(response);
          this.pokemon = response;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.error = true;
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
}
