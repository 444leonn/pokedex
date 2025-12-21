import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardSearch } from './pokemon-card-search';

describe('PokemonCardSearch', () => {
  let component: PokemonCardSearch;
  let fixture: ComponentFixture<PokemonCardSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
