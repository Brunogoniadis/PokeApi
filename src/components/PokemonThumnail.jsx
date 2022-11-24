
import { ThumbContainer } from "./styled.js"
import { Number } from "./styled.js"
import { Detail } from "./styled.js"
import { useState } from "react"

const PokemonThumnail = ({id, name, image, type}) => {

    var color = '';
    color = type;

    return (
        
    <ThumbContainer variant={color}>
        
        <Number>
            <h2>Id: #0{id}</h2>
        </Number>
        <img src={image} alt={image} />
        <Detail>
            <h3>{name}</h3>
            <h4>Type: {type}</h4>
        </Detail>
    </ThumbContainer>
  )
}


export default PokemonThumnail;