import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Character() {
  const [pokemon, setPokemon] = useState([]);
  const [selectPokemon, setselectedPokemon] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

  const getPokemon = async () => {
    const res = await fetch(url);
    const { results } = await res.json();
    setPokemon(results);

    console.log(results);
  };

  const goToPokemon = () => {
    if (selectPokemon) navigate(`/pokemon/${selectPokemon}`);
    else alert("Debes seleccionar un pokémon");
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <div className="pokeTitle">
        <h1>Buscar Pokémon</h1>
        <div>
          <select
            value={selectPokemon}

            onChange={(e) => setselectedPokemon(e.target.value)}
          >
            <option value="disabled" >
              Seleccionar
            </option>
            {pokemon.map((elem, i) => (
              <option kei={i} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
          <button onClick={goToPokemon} >
            BUSCAR
          </button>
        </div>
      </div>
    </>
  );
}