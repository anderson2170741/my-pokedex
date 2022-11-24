import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const Characters = () => {

  const userName = useSelector(state => state.name);
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharactersName] = useState("");
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => setCharacters(res.data.results));

    axios.get(`https://pokeapi.co/api/v2/type/`)
      .then(res => setLocations(res.data.results));

    // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154
    // Sustituir todos los character por pokemon
  }, [])

  console.log(locations);

  const searchCharacter = () => {
    navigate(`/characters/${characterName}`);
  }

  const filterType = (e) => {
    const url = e.target.value;
    axios.get(url)
      .then(res => setCharacters(res.data.pokemon));
  }

  return (
    <div className="pokedexBackgroud">
      <div className="pokedexContainer">
        <div className="headerPokedex">
          <h1>Pokedex</h1>
          <p>Welcom {userName}!</p>
        </div>
        <div className="searchBarPokedex">
          <input
            type="text"
            placeholder='search character'
            value={characterName}
            onChange={e => setCharactersName(e.target.value)}
          />
          <button onClick={searchCharacter}>Search</button>
          <div className="selectContainer">
            <select className="select" onChange={filterType} name="" id="">
              {locations.map(type => (
                <option
                  value={type.url}
                  key={type.name}
                >
                  {type.name}
                </option>
              ))}
            </select>
          </div>

        </div>
        <ul>
          {characters.map(pokemon => (
            <CharacterCard
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Characters;
