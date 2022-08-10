import { Route, NavLink, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';


export const Navigation = () => {


    return (
        <>
            <h2>LazyLayout Pages</h2>
            <ul>
                <li>
                    <NavLink to="lazy1"> Lazy  1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2"> Lazy  2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3"> Lazy  3</NavLink>
                </li>
            </ul>
            
            <Routes>
                <Route path="lazy1" element= { <LazyPage1 />} > </Route>
                <Route path="lazy2" element= { <LazyPage2 />} > </Route>
                <Route path="lazy3" element= { <LazyPage3 />} > </Route>

                <Route path="*" element={ <div>Not found</div> }> </Route>
            </Routes>
        </>
    )
}