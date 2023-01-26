import '../App.css';
import React from 'react';

export default function PokemonDetalle({ pokemon }) {

    return (

        <>
            <div class="pokeContainer" >
                <div class="pokeName">{pokemon.name}</div>
                <div class="detallesContainer">
                    <img src={pokemon.src} alt="pokemon-pic" />
                    <ul>
                        <div class="statsContainer">
                            {pokemon.stats?.map((stat, i) => (
                                <p class="stats" key={i}>
                                    {stat.name}:{stat.base}
                                </p>
                            ))}
                        </div>
                    </ul>
                    <div class="type">Tipo: {pokemon.types}</div>
                </div>
            </div>
        </>
    );
}