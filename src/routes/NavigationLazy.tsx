import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
//import { routes } from './routes2';
import logo from '../logo.svg'



export const NavigationLazy = () => {
    return (

    //Notas:
    //1. Se puede usar lazy loading para cargar los componentes de forma dinamica
    //2. Se envuelve el componente en un Suspense para que se cargue solo cuando se necesite
 
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } className="logo" alt="React Logo" />
                        <ul>
                            
                            {/* Definicion del menu
                             Los elementos de mi menu se estan cargando dinamicamente 
                             de un arreglo {path, names } = routes */}

                            
                            {
                                routes.map(({ path, name }) => (
                                    <li key={ path }>
                                        <NavLink 
                                            to={ path } 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                            { name }
                                        </NavLink>
                                    </li>
                                ))        
                            }
                            
                            
                        </ul>
                    </nav>


                    {/* Ahora se define la logica, que componente va cargar */}
                    <Routes>
                        {
                            routes.map( ({ path, component:Component  }) => (
                                <Route 
                                    key={ path }
                                    path={ path }
                                    element={ <Component /> } 
                                />
                            ))
                        }

                        {/* La ruta por default es la que este la posicion 0 del arreglo */}
                        <Route path="/*" element={ <Navigate to={ routes[0].path } replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}