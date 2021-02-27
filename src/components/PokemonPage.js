import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [search, setSearch ] = useState("")
  const [pokemonData, setPokemonData] = useState([])
  const API_URL = "http://localhost:3001/pokemon"

  useEffect(() => {
    
    fetch(API_URL)
      .then( response => response.json() )
      .then( setPokemonData )

  }, [])

  function handleFormSubmit(formData){
    const postConfig={
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify( formData )
    }

    fetch(API_URL, postConfig)
      .then( response => response.json() )
      .then( newPokemon => {
        setPokemonData([...pokemonData, newPokemon])
      })
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={handleFormSubmit}/>
      <br />
      <Search search={search} onSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection search={search} pokemonData={pokemonData}/>
    </Container>
  );
}

export default PokemonPage;
