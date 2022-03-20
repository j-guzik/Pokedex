import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "react-modal/lib/components/Modal";
import PokemonInfo from "./PokemonInfo";
import CloseIcon from "@material-ui/icons/Close";

function Main(pokeId) {
  const [pokeData, setPokeData] = useState({});
  const [pokeDex, setPokeDex] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokeData = {};
        results.forEach((pokemon, index) => {
          newPokeData[index + offset] = {
            id: index + offset + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + offset + 1
            }.png`,
            // type: pokemon.types.map((poke) => poke.type.name),
          };
        });
        setPokeData(newPokeData);
      });
  }, [offset]);

  // const getType = (pokeId) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
  //     .then(function (response) {
  //       const { data } = response;
  //       const { results } = data;
  //       const type = [];
  //       results => {
  //         type = pokemon.types.map((poke) => poke.type.name)
  //       }
  //     });
  //   setType(type);
  // };

  const getPokemon = (pokeId) => {
    console.log(pokeData[`${pokeId}`]);
    const { id, name, sprite } = pokeData[pokeId];

    return (
      <tr
        key={pokeId}
        onClick={() => {
          setPokeDex(id);
          setModalIsOpen(true);
        }}
        className="pokemon-row"
      >
        <td>{id}</td>
        <td>{name}</td>
        <td></td>
        <td>
          <img src={sprite}></img>
        </td>
      </tr>
    );
  };

  const handleSearchChangeName = (e) => {
    setFilterName(e.target.value);
  };

  const handleSearchChangeType = (e) => {
    setFilterType(e.target.value);
  };

  return (
   
      <div className="container">
        <Modal isOpen={modalIsOpen} ariaHideApp={false}>
          <div>
            <PokemonInfo data={pokeDex} />
            <button className="close" onClick={() => setModalIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
        </Modal>

        <header>
          <h3 className="p-3 text-center">List of pokemons</h3>
        </header>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>
                <div className="th-container">
                  Name
                  <span className="search">
                    <input onChange={handleSearchChangeName}></input>
                    <SearchIcon />
                  </span>
                </div>
              </th>
              <th>
                <div className="th-container">
                  Type{" "}
                  <span className="search">
                    <input onChange={handleSearchChangeType}></input>
                    <SearchIcon />
                  </span>
                </div>
              </th>
              <th>Sprite</th>
            </tr>
          </thead>

          <tbody>
            {pokeData ? (
              <>
                {Object.keys(pokeData).map(
                  (pokeId) =>
                    pokeData[pokeId].name.includes(filterName) &&
                    getPokemon(pokeId)
                )}
              </>
            ) : (
              <CircularProgress />
            )}
          </tbody>
        </table>
        <div className="buttons">
          {offset >= 20 && (
            <button
              onClick={() => {
                setOffset(offset - 20);
              }}
              className="previous button-nav"
            >
              Previous
            </button>
          )}
          {offset <= 1110 && (
            <button
              onClick={() => {
                setOffset(offset + 20);
              }}
              className="next button-nav"
            >
              Next
            </button>
          )}
        </div>
      </div>
 
  );
}

export default Main;
