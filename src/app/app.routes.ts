import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Search } from './pages/search/search';
import { TypesPage } from './pages/types-page/types-page';
import { GenerationPage } from './pages/generation-page/generation-page';
import { DetailsPage } from './pages/details-page/details-page';

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
        path: 'types/:name',
        component: TypesPage,
        title: 'Pokedex - Types',
    },
    {
        path: '/generation/:id',
        component: GenerationPage,
        title: 'Pokedex - Generation',
    },
    {
        path: '/details/:name',
        component: DetailsPage,
        title: 'Pokedex - Details',
    },
    {
        path: '**',
        component: NotFound,
    },
];
