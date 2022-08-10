//Necesario para tener funciones lazync.
import { lazy, LazyExoticComponent } from 'react';
//Componente normal
import { NoLazy } from '../01-lazyload/pages/NoLazy';


// TypeScript: Definicion de tipo de componente
type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent; //tipo de componente
    name: string;
}

//Se va cargar el nuevo submenu con lazy loading.
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));


/* En la dfinicion dinamica de los elementos de nuetro menu tenemos, un perezozo y otro normal */
export const routes: Route[] = [
    {
        path: '/lazyload/*', //path de la ruta indica que hay hijos
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

];