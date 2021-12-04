import { lazy } from 'react';
import { HOME, TRANDING_POST } from './routesPath';

export const Routes = [
	{
		path: HOME,
		title: 'Home',
		exact: true,
		component: lazy(() => import('../views/pages/Home')),
	},
	{
		path: TRANDING_POST,
		title: 'Tranding post',
		exact: true,
		component: lazy(() => import('../views/pages/TrandingPost')),
	},
];