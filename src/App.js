import "./App.css";
import { useEffect, useState } from "react";
import Deck from "./Cards";

function App() {
  const [pokemonCards, setPokemonCards] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      fetch("https://api.pokemontcg.io/v2/cards/", {
        headers: { "X-Api-Key": "02068e61-1a57-4a69-819b-f8bdc5bd982a " },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => setPokemonCards(data));
    };
    getPokemon();
  }, []);

  return <>{pokemonCards && <Deck pokemonCards={pokemonCards} />}</>;
}

export default App;
