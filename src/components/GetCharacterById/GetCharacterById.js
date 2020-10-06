import React, { useState } from "react";
import classes from "./GetCharacterById.module.css";
import GetCharacters from "../GetCharacters/GetCharacters";
const GetCharacterById = (props) => {
  const [userSearchInput, setUserSearchInput] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [touched, setTouched] = useState(false);
  const handleclick = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 1000);
  };

  const handleInput = (searchValue) => {
    setUserSearchInput(searchValue);
    setTouched(true);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.Character}>
        <label>Enter the character ID</label>
        <input
          type="number"
          onChange={(event) => handleInput(event.target.value)}
          style={{ justifyContent: "center" }}
        />
        <button onClick={handleclick}>SEARCH</button>
        <div className={classes.Img}>
          {userSearchInput || touched ? (
            <GetCharacters
              className={classes.Img}
              url={`https://www.breakingbadapi.com/api/characters/${userSearchInput}`}
              clicked={buttonClicked}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GetCharacterById;
