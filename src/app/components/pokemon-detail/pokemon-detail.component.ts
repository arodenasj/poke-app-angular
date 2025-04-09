import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokemonService, PokemonDetail } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemon$: Observable<PokemonDetail | null> |null = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    console.log("Componente PokemonDetailComponent inicializado. Llamando al servicio...");

    this.pokemon$=this.route.params.pipe(
      switchMap(params =>{ const pokemonName = params['name'];
        console.log("Nombre del Pokemon: ", pokemonName);
        if (pokemonName) {
        return this.pokemonService.getPokemonDetail(pokemonName);
      }else{
        console.error("No se ha proporcionado un nombre de Pokemon.");
        return new Observable<PokemonDetail | null>(observer =>
          observer.next(null));
        }
      })
    );
  }
}