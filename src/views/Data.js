import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/PokemonDetalle";

export default function Data() {
  const { name } = useParams();
  const [character, setCharacter] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.home.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));

    const types = data.types.map((e) => e.type.name);
    console.log(name, stats, src, types);

    setCharacter({ name, stats, src, types });
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <>
      <Card pokemon={character} />
    </>
  );
}