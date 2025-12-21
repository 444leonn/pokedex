import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard implements OnInit {
  @Input() name?: string | null;
  pokemon?: Pokemon | undefined;
  loading: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.name) {
      this.loading = true;
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