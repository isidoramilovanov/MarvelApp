import React, { Component } from "react";
import getAllCharacters from "../Api";
import Search from "../partials/Search";
import CharList from "../listOrGrid/CharList";
import Header from "../partials/Header";
import CharGrid from "../listOrGrid/CharGrid";
import Footer from "../partials/Footer";
import LoadingPage from "../partials/LoadingPage";

class Characters extends Component {
  state = {
    loading: true,
    characters: [],
    filteredCharacters: [],
    showGrid: false
  };

  componentDidMount() {
    getAllCharacters().then(data => {
      console.log(data);
      this.setState({
        characters: data.data.results.map(character => {
          return {
            id: character.id,
            name: character.name,
            description: character.description,
            availableComics: character.comics.available,
            image: character.thumbnail.path,
            extension: character.thumbnail.extension
          };
        }),
        filteredCharacters: data.data.results.map(character => {
          return {
            id: character.id,
            name: character.name,
            description: character.description,
            availableComics: character.comics.available,
            image: character.thumbnail.path,
            extension: character.thumbnail.extension
          };
        }),
        showGrid: true,
        loading: false
      });
    });
  }

  searchFilter = event => {
    let inputValue = event.target.value;
    let newCharacters = this.state.characters.filter(character =>
      `${character.name}`.toLowerCase().includes(inputValue.toLowerCase()));
    this.setState({
      filteredCharacters: newCharacters
    })
      if (newCharacters.length===0) {
        this.setState({
          filteredCharacters: [JSON.parse(localStorage.getItem('bookmarkedChar'))]
        });
      }

    
  };

  handleClick = event => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return {
        showGrid: !prevState.showGrid
      };
    });
  };

  showList = () => {
    return <CharList filteredCharacters={this.state.filteredCharacters} />;
  };

  showGrid = () => {
    return <CharGrid filteredCharacters={this.state.filteredCharacters} />;
  };

  content = () => {
    return <div>{this.state.showGrid ? this.showGrid() : this.showList()}</div>;
  };



  render() {
    return (
      <div>
        <Header
          handleClick={this.handleClick}
          changeList={this.state.showGrid}
        />
        <Search
          searchFilter={this.searchFilter}
          inputValue={this.state.inputValue}
        />
        {this.state.loading ? <LoadingPage /> : this.content()}
        <Footer />
      </div>
    );
  }
}

export default Characters;
