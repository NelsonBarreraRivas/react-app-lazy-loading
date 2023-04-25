//import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';
import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    id: string;
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(() => import('../pages/LazyPage1'));
const Lazy2 = lazy(() => import('../pages/LazyPage2'));
const Lazy3 = lazy(() => import('../pages/LazyPage3'));

export const LazyRoutes: Route[] = [
    {
        id: 'lazy 1',
        path: 'lazy1',
        to: '/lazy1',
        Component: Lazy1
    },
    {
        id: 'lazy 2',
        path: 'lazy2',
        to: '/lazy2',
        Component: Lazy2
    },
    {
        id: 'lazy 3',
        path: 'lazy3',
        to: '/lazy3',
        Component: Lazy3
    }
];
