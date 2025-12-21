import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-generation-page',
  imports: [Footer, Navbar],
  templateUrl: './generation-page.html',
  styleUrl: './generation-page.css',
})
export class GenerationPage {

}
