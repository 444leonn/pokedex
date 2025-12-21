import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokemonTypeData } from '../../models/aux.model';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { PokemonCardSearch } from "../../components/pokemon-card-search/pokemon-card-search";


@Component({
  selector: 'app-types-page',
  imports: [Navbar, Footer, PokemonCardSearch],
  templateUrl: './types-page.html',
  styleUrl: './types-page.css',
})
export class TypesPage implements OnInit {
  typeData?: PokemonTypeData | undefined;
  typeName?: string | null;
  loading: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.typeName = params.get('name') || '';
    });

    if (this.typeName) {
      this.loading = true;
      this.http.get<PokemonTypeData>(`https://pokeapi.co/api/v2/type/${this.typeName}`)
        .subscribe({
          next: (response) => {
            this.typeData = response;
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