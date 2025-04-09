import { Component, OnInit } from '@angular/core';
import { PokemonService, PokemonListItem } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements  OnInit{
  pokemons: PokemonListItem[] = [];

  constructor(private pokemonService: PokemonService) { }
  ngOnInit(): void {
    console.log("Componente PokemonListComponent inicializado. Llamando al servicio...");
    this.loadPokemons();
  }
loadPokemons():void {
  this.pokemonService.getPokemons().subscribe(
    response=> {
      console.log("Datos recibidos del servicio: ", response);
      this.pokemons = response.results;
    }, error=> {
      console.error("Error al cargar los pokemons: ", error);
    });
  }
}
