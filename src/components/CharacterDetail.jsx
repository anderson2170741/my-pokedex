import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {

  const [character, setCharacters] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setCharacters(res.data));
  }, [id])

  return (
    <div className="pokedexIdBackgroud">
      <div className="pokedexIDContainer">
        <section className="sectionImgNameData">
          <article id="pokedexIdSectionImgName">
            <img src={character.sprites?.other["official-artwork"].front_default} alt="" />
            <h1>{character.name}</h1>
          </article >
          <article id="pokedexIdSectionData">
            <div id="pokedexIdSectionDataId-Densig">
              <h3># <span>{character.id}</span></h3>
            </div>
            <div id="pokedexIdSectionDataTypeDefens-Densig">
              <p>Type: <span>{character.types?.[0].type.name}</span></p>
              <p>Weight: <span>{character?.weight}</span></p>
              <p>Height: <span>{character?.height}</span></p>
            </div>
          </article>
        </section>
        <section className="statsBase">
          <h3>Stats Base</h3>
          <div id="statsBaseData">
            <div id="statsBaseDataContainer">
              <p>Type: <span>{character.types?.[0].type.name}</span></p>
            </div>
            <div id="statsBaseDataContainer">
              <p>Attack: <span>{character.stats?.[1].base_stat}</span></p>
            </div>
            <div id="statsBaseDataContainer">
              <p>Defense: <span>{character.stats?.[2].base_stat}</span></p>
            </div>
            <div id="statsBaseDataContainer">
              <p>Speed: <span>{character.stats?.[5].base_stat}</span></p>
            </div>
          </div>
        </section>
        <section className="abilities">
          <h2>Abilities</h2>
          <div id="abilitiesData">

          </div>
          <div id="abilitiesData">

          </div>
          <div id="abilitiesData">

          </div>

        </section>
        <section className="movements">

        </section>

      </div>
    </div>

  );
};

export default CharacterDetail; 