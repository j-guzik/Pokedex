import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

function PokemonInfo({ pokeId }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokeId]);

  const getTypeStyle = (type) => {
    let backgroundColor = "";
    switch (type) {
      case "grass":
        backgroundColor = "#9bcc50";
        break;
      case "poison":
        backgroundColor = "#b97fc9";
        break;
      case "fire":
        backgroundColor = "#fd7d24";
        break;
      case "flying":
        backgroundColor = "#3dc7ef";
        break;
      case "water":
        backgroundColor = "#4592c4";
        break;
      case "bug":
        backgroundColor = "#729f3f";
        break;
      case "normal":
        backgroundColor = "#a4acaf";
        break;
      case "electric":
        backgroundColor = "#eed535";
        break;
      case "ground":
        backgroundColor = "#ab9842";
        break;
      case "fairy":
        backgroundColor = "#fdb9e9";
        break;
      case "fighting":
        backgroundColor = "#d56723";
        break;
      case "psychic":
        backgroundColor = "#f366b9";
        break;
      case "rock":
        backgroundColor = "#a38c21";
        break;
      case "steel":
        backgroundColor = "#9eb7b8";
        break;
      case "ghost":
        backgroundColor = "#7b62a3";
        break;
      case "ice":
        backgroundColor = "#51c4e7";
        break;
      case "dragon":
        backgroundColor = "#f16e57";
        break;

      default:
        backgroundColor = "#000";
        break;
    }
    return {
      backgroundColor,
      color: "#FFF",
      margin: "5px",
      padding: "7px 10px 10px",
      minWidth: "70px",
      display: "inline-block",
      textAlign: "center",
    };
  };

  const generatePokemon = (pokemon) => {
    const { name, height, weight, sprites, types } = pokemon;
    const { front_default } = sprites;
    const { back_default } = sprites;
    return (
      <div className="info-container">
        <h1 className="text-center text-capitalize">{name}</h1>
        <div className="text-center">
          {types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return (
              <span key={name} style={getTypeStyle(name)}>
                {" "}
                {`${name}`}
              </span>
            );
          })}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 align-self-center">
              <div>
                <div className="size">Height:</div>
                <div> {height} </div>
                <div className="size">Weight:</div>
                <div> {weight} </div>
              </div>
            </div>
            <div className="col-6">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img className="info-img" src={front_default} alt="front"/>
                  </div>
                  <div class="flip-card-back">
                    <img className="info-img" src={back_default} alt="back"/>
                  </div>
                </div>
              </div>

              {/* <img src={front_default} />
              <img src={back_default} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemon(pokemon)}
      {pokemon === false && <div>Information not found.</div>}
    </>
  );
}

export default PokemonInfo;
