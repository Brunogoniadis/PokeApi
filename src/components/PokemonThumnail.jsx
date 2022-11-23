

import { ThumbContainer } from "./styled.js"
import { Number } from "./styled.js"
import { Detail } from "./styled.js"

const PokemonThumnail = ({id, name, image, type}) => {
  return (
    <ThumbContainer>
        <Number>
            <small>#0{id}</small>
        </Number>
        
        <img src={image} alt={image} />
        <Detail>
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </Detail>
    </ThumbContainer>
  )
}

export default PokemonThumnail;