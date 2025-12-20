import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'not-found',
  imports: [Navbar, Footer],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
