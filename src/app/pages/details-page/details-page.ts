import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { PokemonDetail } from '../../components/pokemon-detail/pokemon-detail';

@Component({
  selector: 'details-page',
  imports: [Footer, Navbar, PokemonDetail],
  templateUrl: './details-page.html',
  styleUrl: './details-page.css',
})
export class DetailsPage {
  pokemonData?: Pokemon | undefined;
  name?: string | null;
  loading: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name') || '';
      
      if (this.name) {
        this.loading = true;
        this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
          .subscribe({
            next: (response) => {
              this.pokemonData = response;
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
    });
  }
}
