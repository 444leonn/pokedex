import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Details } from "../details/details";

@Component({
  selector: 'home',
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
