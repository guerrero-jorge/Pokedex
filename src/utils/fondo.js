const fondo=(pokemon)=>{

    if (pokemon?.types?.[0].type.name==="fighting" ){

            return "rgb(126, 99, 176)"

    }else if(pokemon?.types?.[0].type.name==="flying" ){
        
        return "rgb(58, 227, 252)"

    }else if(pokemon?.types?.[0].type.name==="poison" ){
        
        return "rgb(81, 196, 117)"  
     
    }else if(pokemon?.types?.[0].type.name==="rock" ){
        
        return "rgb(190, 192, 196)"  
        
    }else if(pokemon?.types?.[0].type.name==="bug" ){
        
        return "rgb(232, 12, 232)"    


    }else if(pokemon?.types?.[0].type.name==="ghost" ){
        
        return "rgb(228, 170, 240)"  
    }else if(pokemon?.types?.[0].type.name==="steel" ){
        
        return "rgb(170, 175, 191)"  
    }else if(pokemon?.types?.[0].type.name==="water" ){
        
        return "rgb(22, 135, 184)"              

    }else if(pokemon?.types?.[0].type.name==="fire" ){


        return "rgb(252, 147, 10)"    
     
    }else if(pokemon?.types?.[0].type.name==="ground"){

        return "rgb(219, 99, 7)"     
    }else if(pokemon?.types?.[0].type.name==="grass"){

        return "rgb(42, 219, 7)"    




    }else if(pokemon?.types?.[0].type.name==="electric"){

        return "rgb(247, 247, 5)"    
        
    }else if(pokemon?.types?.[0].type.name==="psychic"){

        return "rgb(227, 247, 42)"    
        
    }else if(pokemon?.types?.[0].type.name==="ice"){

        return "rgb(165, 192, 212)"        

    }else if(pokemon?.types?.[0].type.name==="dragon"){

        return "rgb(206, 240, 151)"
    }else if(pokemon?.types?.[0].type.name==="dark"){

        return "rgb(156, 137, 147)"
        
    }else if(pokemon?.types?.[0].type.name==="fairy"){

        return "rgb(247, 116, 186)"    


    }else if(pokemon?.types?.[0].type.name==="normal"){

        return "rgb(246, 192, 250)"

    }else{

        return "rgb(252, 250, 252)"
    }
    
}
export default fondo;








































