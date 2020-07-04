import React, { useState } from 'react'
import classes from './GetCharacterById.module.css'
import GetCharacters from '../GetCharacters/GetCharacters'
const GetCharacterById = (props) => {
    const [userSearchInput, setUserSearchInput] = useState()
    const [buttonClicked, setButtonClicked] = useState(false)
    const [touched,setTouched] = useState(false)
    const handleclick = () => {
        setButtonClicked(true)
        setTimeout(() => {
            setButtonClicked(false)
        }, 1000)
    }

    const handleInput = (searchValue) => {
        setUserSearchInput(searchValue)
        setTouched(true)
    }
    return (
        <React.Fragment>
            <div className={classes.Character}>
                <label>Enter the character ID</label>
                <input type="number" onChange={(event) => handleInput(event.target.value)} />
                <button onClick={handleclick}>SEARCH</button>
            </div>
            <div className={classes.Center}>
                {userSearchInput || touched ? <GetCharacters
                    url={`https://www.breakingbadapi.com/api/characters/${userSearchInput}`}
                    clicked={buttonClicked}
                /> : null}
            </div>
        </React.Fragment>

    )
}

export default GetCharacterById