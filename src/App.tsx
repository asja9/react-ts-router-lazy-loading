/* 
Navegacion peresoza, si no se quieren cargar todos los componentes, 
se puede usar lazy loading
*/

/*
import { NavigationLazy } from './routes/NavigationLazy';
function App() {
  return (
    <>
      <NavigationLazy/>
    </>
  );
}

export default App;
*/

//////////////////////////////////////////////////////////////////////////////////////////////

/*
    Ejemplo de lazy loading y carga normal incluyendo menu anidado
*/
import { NavigationAnidado } from './routes/NavigationAnidado';
function App() {
  return (
    <>
      <NavigationAnidado/>
    </>
  );
}
export default App;
