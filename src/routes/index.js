import { lazy } from 'react';
import {
	HOME,
	HUNTERS_VALLEY,
	TRANDING_POST,
	INSTRUCTIONS,
	INVENTORY,
	TRAINING_GROUND,
} from './routesPath';

export const NavbarRoutes = [
	{
		path: HUNTERS_VALLEY,
		pathForNavabr: HUNTERS_VALLEY,
		title: 'Hunter’s Valley',
		exact: true,
		component: lazy(() => import('../views/pages/HuntersValley')),
	},
	{
		path: TRANDING_POST,
		title: 'Tranding post',
		pathForNavabr: TRANDING_POST,
		exact: true,
		component: lazy(() => import('../views/pages/TrandingPost')),
	},
	{
		path: INVENTORY,
		title: 'Inventory',
		pathForNavabr: '/inventory/all',
		exact: true,
		component: lazy(() => import('../views/pages/Inventory')),
	},

	{
		path: TRAINING_GROUND,
		pathForNavabr: TRAINING_GROUND,
		title: 'Training Ground',
		exact: true,
		component: lazy(() => import('../views/pages/TrainingGround')),
	},
	{
		path: '/',
		pathForNavabr: '/',
		title: 'More',
		exact: true,
		component: lazy(() => import('../views/pages/Home')),
	},
];

export const Routes = [
	...NavbarRoutes,
	{
		path: HOME,
		title: 'Home',
		exact: true,
		component: lazy(() => import('../views/pages/Home')),
	},
	{
		path: INSTRUCTIONS,
		title: 'instructions',
		exact: true,
		component: lazy(() => import('../views/pages/HowToPlay')),
	},
];