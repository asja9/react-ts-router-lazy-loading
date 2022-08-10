
import { LazyExoticComponent } from 'react';
// Permitir la carga peresoza de componentes.
import { lazy } from 'react'

// TypeScript: Definicion de tipo de componente
type JSXComponent = () => JSX.Element;

// TypeScript: Interface para que obligue a crear la estructura correcta. 
interface Route {
    path: string; // Ruta
    component: LazyExoticComponent<JSXComponent> | JSXComponent, // Componente
    name: string;
    children?: Route[]
}

//Implementacion de lazy loading. 
//El comentario, remplaza el nombre.
const LazyPage1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
const LazyPage2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
const LazyPage3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );


// TypeScript: Definicion dinamica de rutas, apoyado de una interface.
export const routes: Route[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    },
]