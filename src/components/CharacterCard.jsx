import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ url }) => {

    const [character, setCharacters] = useState({});

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacters(res.data));
    }, []);

    return (
        <div className="card">
            <Link to={`/characters/${character.id}`}>
                <h2>{character.name}</h2>
                <div className="imgCard">
                    <img src={character.sprites?.other.dream_world.front_default} alt='' />
                </div>
                <div className="dataCard">
                    <h3># <span>{character.id}</span></h3>
                    <p>Type: <span>{character.types?.[0].type.name}</span></p>
                    <p>Attack: <span>{character.stats?.[1].base_stat}</span></p>
                    <p>Defense: <span>{character.stats?.[2].base_stat}</span></p>
                    <p>Speed: <span>{character.stats?.[5].base_stat}</span></p>
                </div>
            </Link>
        </div>

    );
};

export default CharacterCard;