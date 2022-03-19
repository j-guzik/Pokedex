import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Modal from "react-modal/lib/components/Modal";
import PokemonInfo from "./PokemonInfo";

function Main(pokeId) {
  const [pokeData, setPokeData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(function (response) {
      const { data } = response;
      const { results } = data;
      const newPokeData = {};
      results.forEach((pokemon, index) => {
        newPokeData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
          // type: pokemon.types.map((poke) => poke.type.name),
        };
      });
      setPokeData(newPokeData);
    });
  }, []);

  const getPokemon = (pokeId) => {
    console.log(pokeData[`${pokeId}`]);
    const { id, name, sprite, type} = pokeData[pokeId];

    return (
      <tr key={pokeId} onClick={() => {setModalIsOpen(true)}}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{type}</td>
        <td>
          <img src={sprite}></img>
        </td>
      </tr>
    );
  };

  return (
    <div className="Main">
      <div className="container">
        <Modal isOpen={modalIsOpen}>
          <div>
            <PokemonInfo data={pokeId} />
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
        <h3 className="p-3 text-center">List of pokemons</h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Sprite</th>
            </tr>
          </thead>

          {pokeData ? (
            <tbody>
              {Object.keys(pokeData).map((pokeId) => getPokemon(pokeId))}
            </tbody>
          ) : (
            <CircularProgress />
          )}
        </table>
      </div>
    </div>
  );
}

export default Main;
