import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { NotFoundComp } from '../not-found-comp/not-found-comp';

@Component({
  selector: 'app-pokemon-detail',
  imports: [NotFoundComp],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail implements OnInit {
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
