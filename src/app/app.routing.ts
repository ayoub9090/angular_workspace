import { ModuleWithProviders } from '@angular/core';
import { Route,RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { CardsGrouping }  from './app.grouping';
import { boardsOverview }  from './app.boardsOverview';

const app_routes = [
	{
		path:'',
		component: boardsOverview
	},
	{
		path: 'cardsGrouping',
		component: CardsGrouping
	}
];

export const routers : ModuleWithProviders = RouterModule.forRoot(app_routes);

