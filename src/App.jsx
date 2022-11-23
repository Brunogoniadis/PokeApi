import  { AppContainer }  from "./App.js"
import { PokemonContainer } from "./App.js"
import { Allcontainer } from "./App.js"
import { LoadMore } from "./App.js"



function App() {

  return (
    <AppContainer>
      <h1>Pokemon Evolution</h1>
      <PokemonContainer>
        <Allcontainer> 

        </Allcontainer>
        <LoadMore></LoadMore>
      </PokemonContainer>
    </AppContainer>
  )
}

export default App;
