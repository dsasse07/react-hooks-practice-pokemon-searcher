import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ search, pokemonData }) {

  const sortedPokemon = pokemonData.sort( (pokemon1, pokemon2) => {
    return pokemon1.name.localeCompare(pokemon2.name)
  })

  const filteredPokemon = sortedPokemon.filter( pokemon => {
    return pokemon.name.includes(search)
  })

  const pokemonCards = filteredPokemon.map (pokemon => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
      <h1>Hello From Pokemon Collection</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
