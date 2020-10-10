import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { selectAction } from "../../../store/actions/actions";
import Logo from "../../../images/BB_S5_excl_namelab_c.jpg";

import Select from "react-select";

const CharacterOptions = [
  { value: "-----------", label: "-----------" },
  { value: "Get character by id", label: "Get character by id" },
  { value: "Get character by category", label: "Get character by category" },
  { value: "Get random character", label: "Get random character" },
  { value: "Search character by name", label: "Search character by name" },
];

const QuoteOptions = [
  { value: "-----------", label: "-----------" },
  { value: "Get quote by id", label: "Get quote by id" },
  { value: "Get quotes by series", label: "Get quotes by series" },
  { value: "Get a random quote", label: "Get a random quote" },
  { value: "Get quote by author", label: "Get quote by author" },
  {
    value: "Get a random quote by author",
    label: "Get a random quote by author",
  },
];

const Navbar = (props) => {
  const dispatch = useDispatch();
  const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState(false);

  const dropDownCharacterSelected = (value) => {
    if (value !== "-----------") {
      setSelectedCharacter(true);
      dispatch(selectAction(value.value));
    } else {
      dropDownCharacterDeSelected(value.value);
      dispatch(selectAction(null));
    }
  };

  const dropDownCharacterDeSelected = () => {
    setSelectedCharacter(false);
  };

  const dropDownQuoteSelected = (value) => {
    if (value !== "-----------") {
      setSelectedQuote(true);
      dispatch(selectAction(value.value));
    } else {
      dropDownQuoteDeSelected(value.value);
      dispatch(selectAction(null));
    }
  };

  const dropDownQuoteDeSelected = () => {
    setSelectedQuote(false);
  };

  return (
    <nav className={classes.Navbar}>
      <img src={Logo} alt="Logo" width="100" height="60" />
      <div>
        <ul>
          <li>
            <label>Characters</label>
            <div>
              <Select
                disabled={selectedQuote}
                onChange={dropDownCharacterSelected}
                options={CharacterOptions}
              />
            </div>
          </li>
          <li>
            <label>Quotes</label>
            <div className={classes.Select}>
              <Select
                disabled={selectedCharacter}
                onChange={dropDownQuoteSelected}
                options={QuoteOptions}
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
