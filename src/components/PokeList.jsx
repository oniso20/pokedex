import React, { Component } from "react";
import Card from "./Card";
import classes from "../components/PokeList.module.css";

class PokeList extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: !this.state.isLoading });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });
        Promise.all(fetches).then((res) => {
          this.setState({ data: res, isLoading: !this.state.isLoading });
          console.log(res);
        });
      });

    // fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({ data: data.results, isLoading: !this.state.isLoading });
    //     console.log(data);
    //   });
  }
  render() {
    return (
      <div className={classes.pokeList}>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          this.state.data.map((cards, idx) => (
            <Card
              key={idx}
              name={cards.name}
              image={cards.sprites.other["official-artwork"].front_default}
            />
          ))
        )}
      </div>
    );
  }
}

export default PokeList;
