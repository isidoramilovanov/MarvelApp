import React from "react";
import { Link } from "react-router-dom";

const CharGrid = props => {
  console.log(props);
  return (
    <div className="main-grid-section">
      {props.filteredCharacters.slice(0, 20).map(character => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            key={character.id}
            to={{
              pathname: `/oneCharacterInfo/${character.name}`,
              state: { character }
            }}
          >
            <ul className="grid">
              <div className="card">
                <img
                  alt="marvel"
                  className="grid-img"
                  src={`${character.image}.${character.extension}`}
                />
                <div className="container">
                  <li className="grid-item">{character.name}</li>
                </div>
              </div>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default CharGrid;
