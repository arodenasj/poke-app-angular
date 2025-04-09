import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';


export const routes: Routes = [
    {
        path: 'pokemons',
        component: PokemonListComponent,
        title: 'Lista de Pokemons',
    },
    {
        path: 'pokemon/:name',
        component: PokemonDetailComponent,
        title: 'Detalle de Pokemon',
    },
    {
        path: '',
        redirectTo: 'pokemons',
        pathMatch: 'full',
    }
];
