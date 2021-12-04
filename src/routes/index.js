import { lazy } from 'react';
import { HOME, HUNTERS_VALLEY, TRANDING_POST } from './routesPath';

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
	{
		path: HUNTERS_VALLEY,
		title: 'Tranding post',
		exact: true,
		component: lazy(() => import('../views/pages/HuntersValley')),
	},
];