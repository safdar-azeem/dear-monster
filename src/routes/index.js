import { lazy } from 'react';
import { HOME, HUNTERS_VALLEY, TRANDING_POST } from './routesPath';

export const NavbarRoutes = [
	{
		path: HUNTERS_VALLEY,
		title: 'Hunter’s Valley',
		exact: true,
		component: lazy(() => import('../views/pages/HuntersValley')),
	},
	{
		path: TRANDING_POST,
		title: 'Tranding post',
		exact: true,
		component: lazy(() => import('../views/pages/TrandingPost')),
	},
	{
		path: '/',
		title: 'Inventory',
		exact: true,
		component: lazy(() => import('../views/pages/Home')),
	},
	{
		path: '/',
		title: 'Training Ground',
		exact: true,
		component: lazy(() => import('../views/pages/Home')),
	},
	{
		path: '/',
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
];