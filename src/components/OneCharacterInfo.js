import React from "react";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";

const OneCharacterInfo = props => {
  console.log(props);
  const character = props.location.state.character;
  return (
    <div>
      <Link to="/">
        <button className="btn-back">Go back</button>
      </Link>
      <button className="bookmark" onClick={localStorage.setItem('bookmarkedChar', JSON.stringify(character))}>Bookmark</button>
      <div>
        <h1 className="character-name">{character.name}</h1>
      </div>
      <div className="character-info">
        <div className="image">
          <img
            className="one-chararacter-image"
            alt="marvel_image"
            src={`${character.image}.${character.extension}`}
          />
        </div>
        <div className="character_description">
          <div className="character-flex">
            <p className="description">Description: {character.description}</p>
            <p className="available-comics">
              Available comics: {character.availableComics}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OneCharacterInfo;
