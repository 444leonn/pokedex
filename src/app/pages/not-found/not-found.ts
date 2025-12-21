import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { NotFoundComp } from '../../components/not-found-comp/not-found-comp';

@Component({
  selector: 'not-found',
  imports: [Navbar, Footer, NotFoundComp],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
