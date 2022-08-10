import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes2';
import logo from '../logo.svg'



export const NavigationAnidado = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> }>

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } className="logo" alt="React Logo" />
                        <ul>

                            { /* Definicion del menu  */ }
                            
                            {
                                routes.map(({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink 
                                            to={ to } 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                            { name }
                                        </NavLink>
                                    </li>
                                ))
                                    
                            }
                            
                            
                        </ul>
                    </nav>


                    <Routes>

                        { /* Definición de la lógica (rutas)  */ }
                        {
                            routes.map( ({ path, Component  }) => (
                                <Route 
                                    key={ path }
                                    path={ path }
                                    element={ <Component /> } 
                                />
                            ))
                        }
                        
                        { /* La ruta por default es la que este la posicion 0 del arreglo */ }
                        <Route path="/*" element={ <Navigate to={ routes[1].to } replace /> } />
                        


                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}