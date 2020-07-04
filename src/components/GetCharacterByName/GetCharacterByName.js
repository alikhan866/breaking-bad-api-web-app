import React, { useState } from 'react'
import classes from './GetCharacterByName.module.css'
import GetCharacters from '../GetCharacters/GetCharacters'
import { useSelector } from 'react-redux';

const GetCharacterByName = (props) => {
    const numberOfCharacters = useSelector(state => state.numberOfCharacters)
    const [userSearchInput, setUserSearchInput] = useState()
    const [buttonClicked, setButtonClicked] = useState(false)
    const handleclick = () => {
        setButtonClicked(true)
        setTimeout(() => {
            setButtonClicked(false)
        }, 1000)
    }
    return (
        <React.Fragment>
            <div className={classes.Name}>
                <label>Enter the character name</label>
                <input type="text" onChange={(event) => setUserSearchInput(event.target.value.split(" ").join("+"))} />
                <button onClick={handleclick}>SEARCH</button>
            </div>
            <div className={numberOfCharacters > 1 ? null : classes.Center}>
                <GetCharacters
                    url={`https://www.breakingbadapi.com/api/characters?name=${userSearchInput}`}
                    clicked={buttonClicked && userSearchInput}
                />
            </div>

        </React.Fragment>
    )
}

export default GetCharacterByName