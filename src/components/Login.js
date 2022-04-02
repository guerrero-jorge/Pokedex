import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import logo from '../images/logo2.png'
import ball from '../images/ball.png'


const Login = () => {

    const [ userName, setUserName]=useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const submit= e =>{

        e.preventDefault();
        console.log(userName);
        dispatch({ 
                    type:"GET_USER",
                    payload:userName,
        });
        setUserName("");
        navigate("/pokedex")


    }

    return (
        <div className='containerLogin'>
            <div className='containerLogo'>
                <img src={logo} alt="logo" />
                <form action="" onSubmit={submit}>
                    <p id="plogin">Hi buddy!</p>
                    <p>Give me your name to start</p> 

                    <input 
                        type="text" 
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        required
                    />
                    <button>Submit</button>

                </form>
                
            </div>
           
            
        </div>
    );
};

export default Login;