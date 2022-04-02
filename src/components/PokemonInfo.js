import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import logo from '../images/logo2.png';
import logo2 from '../images/logo.png';
import fondo from '../utils/fondo';
import { Link } from 'react-router-dom';

const PokemonInfo = () => {

    const {id}= useParams();

    const [pokemon, setPokemon]=useState({});
    
    const hp=pokemon.stats?.[0].base_stat;
    const att=pokemon.stats?.[1].base_stat;
    const defense=pokemon.stats?.[2].base_stat;
    const speed=pokemon.stats?.[5].base_stat;

    const calculate=(valor)=>{
         
        let porcen=0;
        
        if(valor<150){

            porcen=10*valor/15;
            console.log("Defensa, hp, etc",valor);
            console.log("Porcentaje",porcen+"%");
        }else{

            porcen=100;
        }
       
        return porcen+"%";
    }


    useEffect(()=>{

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( res => setPokemon(res.data))

    },[id])

    return (
        <div className='containerPokemonInfo'>

                <nav className='nav'>
                    <Link className='link' to="/pokedex" ><i className="fas fa-arrow-circle-left"></i></Link>
                    <img src={logo2} alt="logo" />
                </nav>

        <div className='containerInfo' style={{borderColor:fondo(pokemon)}}>
            
                <img src={pokemon.sprites?.other.home.front_default} alt="Not found" />
                <h2 style={{color:"gray"}}>#{pokemon.id}</h2>
                <h1 style={{color:fondo(pokemon)}}>{pokemon.name}</h1>
                
                <div className='weightHeight'>
                    <div className='height'>
                        <p>Height</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className='weight'>
                        <p>Weight</p>
                        <p>{pokemon.weight}</p>
                    </div>
                    
                </div>

                <div className='containerTypeAbili'>

                    <div className='ContainerAbili'>
                            <p><b>Type </b></p>
                            <div className='abilitiesInfo'> 
                                {
                                    pokemon.types?.map(poke =>
                                        <p key={poke.type.name}>{poke.type.name} </p>
                                        )
                                }
                            </div>
                    </div>


                        <div className='ContainerAbili'>
                            <p><b>Abilities </b></p>
                            <div className='abilitiesInfo' >
                                {
                                    pokemon.abilities?.map(poke =>
                                        <p className='abili' key={poke.ability.name}>{poke.ability.name}  </p>
                                        )
                                }
                            </div>
                        </div>

                </div>
                

                                
                <div className='containerStats' style={{background:fondo(pokemon)}}> 

                            <h2>Stats</h2> 
                            
                            {/* Barras de Progreso */}    
                            <div className="progress" >
                                <div style={{height: "100%", width:calculate(hp)? calculate(hp) : 0, background:"rgba(26, 24, 24, 0.568)"}}></div>
                            </div> 
                            <p><b>HP: </b>{pokemon.stats?.[0].base_stat}/150 </p> 

                            
                            <div className="progress" >
                                <div style={{height: "100%", width:calculate(att)? calculate(att) : 0, background:"rgba(26, 24, 24, 0.568)"}}></div>
                            </div>
                            <p><b>Attack: </b>{pokemon.stats?.[1].base_stat}/150</p>
                        
                            
                            <div className="progress" >
                                <div style={{height: "100%", width:calculate(defense)? calculate(defense) : 0, background:"rgba(26, 24, 24, 0.568)"}}></div>
                            </div>
                            <p><b>Defense: </b>{pokemon.stats?.[2].base_stat}/150</p>

                            
                            <div className="progress" >
                                <div style={{height: "100%", width:calculate(speed)? calculate(speed) : 0, background:"rgba(26, 24, 24, 0.568)"}}></div>
                            </div>
                            <p><b>Speed: </b>{pokemon.stats?.[5].base_stat}/150</p>
                    
                </div>     
        </div> 

            <div className='containerMovements' style={{background:fondo(pokemon)}}>
                        <h2>Movements</h2>
                        {
                                pokemon.moves?.map(poke =>
                                    <span key={poke.move.name}>{poke.move.name}  </span>
                                )
                        }

            </div>        
        </div>
    );
};

export default PokemonInfo;