import { useState, useEffect } from "react"
import  PokemonThumb  from "./components/PokemonThumnail.jsx" 

import  { AppContainer }  from "./App.js"
import { PokemonContainer } from "./App.js"
import { Allcontainer } from "./App.js"
import { LoadMore } from "./App.js"


function App() {

  const [allPokemons, setAllPokemons] = useState([

  ])
  const [loadMore, setLoadMore] = useState
  ('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async()=> {
    const res = await fetch(loadMore)
    const data =await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])
  

  return (
    <AppContainer>
      <h1>Pokemon Evolution</h1>
      <PokemonContainer>
        <Allcontainer> 

        </Allcontainer>

        {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}

        <LoadMore onClick={()=> getAllPokemons()}></LoadMore>

      </PokemonContainer>
    </AppContainer>
  )
}

export default App;
