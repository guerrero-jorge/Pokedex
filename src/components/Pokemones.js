import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardPokemon from './CardPokemon';
import { useNavigate } from 'react-router';
import logo2 from '../images/logo.png'



const Pokemones = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons]=useState([]);
    const [pokemonName, setPokemonName]=useState("");
    const [types, setTypes]= useState([]);
    const [page,setPage]=useState(1);
    const navigate=useNavigate();


    //Variables para paginación
    
    const characterPerPage=12;
    const lastIndex=page*characterPerPage;
    const firstIndex=lastIndex-characterPerPage;
    const paginatedCharacters=pokemons.slice(firstIndex,lastIndex);
    const totalPages=Math.ceil(pokemons.length/characterPerPage);






    useEffect(()=>{

        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
             .then(res => setPokemons(res.data.results))


        axios.get("https://pokeapi.co/api/v2/type") 
              .then(res => setTypes(res.data.results) )    
    },[])

    const submit=(e)=>{

        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`)

    }

    //Funcion para manaejar el select
    const handleType= e =>{

        setPage(1);
        axios.get(e.target.value)
             .then(res =>{
                console.log(res.data.pokemon)
                setPokemons(res.data.pokemon)

             } )

    }



    return (
        <div className='ContainerPokemon'>
                
                <nav className='nav'>

                    
                    
                    <img src={logo2} alt="logo" />
                </nav>
                
                <h3>Welcome <span><strong>{userName}</strong></span>, you can find your favorite pokemon here !</h3>
                
                <form onSubmit={submit}>
                    <input 
                        type="text" 
                        placeholder='Search Pokemon'
                        onChange={e => setPokemonName(e.target.value)}
                        value={pokemonName}
                    />
                    <button>Search</button>
                </form>


                
                <div className='select'>

                    <select onChange={handleType}>

                        {/*<option value="">All pokemons</option>*/}
                        {
                            types.map(type => (
                                <option key={type.url} value={type.url}>{type.name}</option>
                            ))
                            
                        }
                              
                    </select>
                </div>

                <ul>
                    {
                        paginatedCharacters.map(pokemon => 
                            <CardPokemon 
                                pokemonUrl={pokemon.url? pokemon.url : pokemon.pokemon.url} 
                                key={pokemon.url? pokemon.url : pokemon.pokemon.url}/>
                        )

                    }

                </ul>
                


                <div className='botoneInferiores'>

                    {
                        pokemons.length>0 ? (
                            <>
                                
                                {
                                    page!==1 &&(
                                    <button onClick={()=>setPage(page-1)}><i className="fa-solid fa-circle-left"></i></button>
                                    )
                                }

                                <span>{page} / {totalPages}</span>

                                {
                                    page!==totalPages &&(
                                    <button onClick={()=>setPage(page+1)}><i className="fa-solid fa-circle-right"></i></button>
                                    )
                                }

                            </>  

                        ):(
                            
                            <div>0 / 0</div>
                        )

                    }
                    
                </div>
    
            


        </div>
    );
};

export default Pokemones;