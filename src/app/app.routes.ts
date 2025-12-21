import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Search } from './pages/search/search';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Pokedex - Home',
    },
    {
        path: 'search/:name',
        component: Search,
        title: 'Pokedex - Search',
    },
    {
        path: '**',
        component: NotFound,
    },
];
