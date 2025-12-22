import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  })
  isGenerationsDropdownOpen = false;
  isTypesDropdownOpen = false;
  isMobileMenuOpen = false;

  constructor(private router: Router) { }
  
  onSubmit() {
    this.router.navigateByUrl(`/search/${this.searchForm.value.searchInput}`)
  }

  toggleGenerationsDropdown() {
    this.isGenerationsDropdownOpen = !this.isGenerationsDropdownOpen;
  }

  toggleTypesDropdown() {
    this.isTypesDropdownOpen = !this.isTypesDropdownOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
