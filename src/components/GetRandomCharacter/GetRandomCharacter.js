import React, { useState } from 'react'
import classes from './GetRandomCharacter.module.css'
// import RandomCharacterData from './RandomCharacterData/RandomCharacterData'
import GetCharacters from '../GetCharacters/GetCharacters'
const GetRandomCharacter = (props) => {
    const [buttonClicked, setButtonClicked] = useState(false)
    const handleclick = () => {
        setButtonClicked(true)
        setTimeout(() => {
            setButtonClicked(false)
        }, 1000)
    }
    return (
        <React.Fragment>
            <div className={classes.Random}>
                <label>Generate a random character!</label>
                <button onClick={handleclick}>GENERATE</button>
            </div>
            <div className={classes.Center}>
                <GetCharacters
                    url={`https://www.breakingbadapi.com/api/character/random`}
                    clicked={buttonClicked}
                />
            </div>

        </React.Fragment>

    )
}

export default GetRandomCharacter