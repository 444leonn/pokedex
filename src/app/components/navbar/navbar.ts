import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  })
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  constructor(private router: Router) { }
  
  onSubmit() {
    this.router.navigateByUrl(`/search/${this.searchForm.value.searchInput}`)
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
