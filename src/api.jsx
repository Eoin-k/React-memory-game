
export function ApiCall() {    
    const numOfCards = 12
    const randomPokemonSet = Math.random() * 120
    const pokemonArray = []
    const allPokemon = `https://pokeapi.co/api/v2/pokemon/?limit=${numOfCards}&offset=${randomPokemonSet}`
    
    const getPokemonDetails = async (pokemon) => {
        try{
            const res = await fetch(pokemon.url)
            const data = await res.json()
            pokemonArray.push(data)
        } catch(err){
            console.error
        }
        
    }

        const getPokemon = async () => {
         try { const res = await fetch(allPokemon)
        const data = await res.json()
        const pokemonList = data.results
        // chained call needed to get indivdual pokemon details
        pokemonList.forEach(pokemon => {
            getPokemonDetails(pokemon)
        })
       } catch(err) {
            console.error(err)
        }
        
    }
        getPokemon()
        return pokemonArray
}