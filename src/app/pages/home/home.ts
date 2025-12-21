import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { PokemonCarousel } from "../../components/pokemon-carousel/pokemon-carousel";

@Component({
  selector: 'home',
  imports: [Navbar, Footer, PokemonCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
