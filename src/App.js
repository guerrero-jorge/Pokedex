import { HashRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from "./components/Login";
import Pokemones from './components/Pokemones';
import PokemonInfo from './components/PokemonInfo';
import ProtectedRoutes from './components/ProtectedRoutes';




function App() {
  return (

    <HashRouter>
      <div className="App">

        <Routes>

          <Route path='/' element={<Login/>}/>

          <Route element={<ProtectedRoutes/>}> {/* rutas protegidas: pokedex y pokedex/x */}
            <Route path='/pokedex' element={<Pokemones/>}/>
            <Route path='/pokedex/:id' element={<PokemonInfo/>}/>
          </Route>
          
        </Routes>

      </div>
      
    </HashRouter>
    
  );
}

export default App;
