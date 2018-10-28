import React from "react";
import { Link } from "react-router-dom";

const CharList = props => {
  console.log(props);
  return (
    <div className="main-list-section">
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
            <ul className="list">
              <li className="list-item">{character.name}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default CharList;
