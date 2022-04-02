import React, { useEffect } from 'react';
import axios from 'axios';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import fondo from '../utils/fondo';
import notAvailable from '../images/image.png';


const CardPokemon = ({pokemonUrl}) => {

    

    

    const [pokemon, setPokemon]=useState({});

    const [ayuda,setAyuda]=useState("");

   // console.log("tipo",pokemon);

    useEffect(()=>{

        axios.get(pokemonUrl)
             .then(res => {
                 setPokemon(res.data)
                 //console.log(res.data)

                 })},[pokemonUrl])


 

    return (
        <li className='cardPokemones' style={{backgroundColor:fondo(pokemon)}}>
            <Link to={`/pokedex/${pokemon.id}`}>  
                <div className='containerPoke'>

                    <h2 style={{color:fondo(pokemon)}}>{pokemon.name}</h2>
                    
                    <img src={pokemon.sprites?.other.home.front_default? pokemon.sprites?.other.home.front_default : notAvailable} alt="Not found" />
                    <div>
                            
                            {
                                pokemon.types?.map(poke =>
                                    <span key={poke.type.name}><b>{poke.type.name} </b></span>
                                    )
                            }
                    </div>
                    <p id='containerPokeP'>Type</p>
                    <div className='cardPokemonesDiv' style={{background:fondo(pokemon)}}>

                        

                        <p><b>HP:</b>{pokemon.stats?.[0].base_stat}</p>
                        <p><b>Attack:</b>{pokemon.stats?.[1].base_stat}</p>
                        <p><b>Defense:</b>{pokemon.stats?.[2].base_stat}</p>
                        <p><b>Speed:</b>{pokemon.stats?.[5].base_stat}</p>
                        
                    </div>
                </div> 
                   
            </Link>
        </li>
    );
};

export default CardPokemon;