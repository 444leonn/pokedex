import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GenerationData } from '../../models/generation.model';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { PokemonCardSearch } from '../../components/pokemon-card-search/pokemon-card-search';
import { NotFoundComp } from "../../components/not-found-comp/not-found-comp";

@Component({
  selector: 'app-generation-page',
  imports: [Footer, Navbar, PokemonCardSearch, NotFoundComp],
  templateUrl: './generation-page.html',
  styleUrl: './generation-page.css',
})
export class GenerationPage {
  genData?: GenerationData | undefined;
  genId?: string | null;
  loading: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.genId = params.get('id') || '';
      
      if (this.genId) {
        this.loading = true;
        this.http.get<GenerationData>(`https://pokeapi.co/api/v2/generation/${this.genId}`)
          .subscribe({
            next: (response) => {
              this.genData = response;
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
