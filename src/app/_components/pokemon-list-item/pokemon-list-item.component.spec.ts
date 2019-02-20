import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListItemComponent } from './pokemon-list-item.component';
import { AppMaterialModule } from '../../app.material';
import { PokemonService } from '../../_providers/pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonListItemComponent', () => {
  let component: PokemonListItemComponent;
  let fixture: ComponentFixture<PokemonListItemComponent>;
  const mockPokemon = {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonListItemComponent
      ],
      imports: [
        AppMaterialModule,
        HttpClientTestingModule
      ],
      providers: [
        PokemonService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListItemComponent);
    component = fixture.componentInstance;
    component.pokemon = mockPokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should get a pokemon's id from the object's url`, () => {
    expect(component.getPokemonIdFromUrl(mockPokemon.url)).toBe('1');
  });

});
