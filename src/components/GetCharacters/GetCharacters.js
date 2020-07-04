import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './GetCharacters.css'
import {useDispatch} from 'react-redux'
import {numberOfCharacters} from '../../store/actions/actions'
import Spinner from '../../components/UI/Spinner/Spinner'
import GetCharacter from './GetCharacter/GetCharacter'
const CharacterData = (props) => {
    const dispatch = useDispatch()
    const [RawCharactersData, setRawCharactersData] = useState()
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        const getCharacterData = async () => {
            const response = await axios.get(`${props.url}`)
            console.log(`${props.url}`)
            setRawCharactersData(response.data)
            const lengthOfCharacters = Object.keys(response.data).length
            dispatch(numberOfCharacters(lengthOfCharacters))
            setLoading(false)
        }
        if (props.url && props.clicked) {
            setLoading(true)
            getCharacterData()
        }
    }, [props,dispatch])


    const newArray = RawCharactersData ? RawCharactersData.map(characterData => {
        const image = characterData ? <img src={characterData.img} alt="My Character" width="210px" height="300px"></img> : null
        const characterName = characterData ? characterData.name : null
        const characterNick = characterData ? characterData.nickname : null
        const characterBirthday = characterData ? characterData.birthday : null
        const characterOccupation = characterData ? characterData.occupation.join() : null
        const characterPortrayed = characterData ? characterData.portrayed : null
        const characterId = Math.random()
        return (
            <GetCharacter
            image={image}
            characterName={characterName}
            characterNick={characterNick}
            characterBirthday={characterBirthday}
            characterOccupation={characterOccupation}
            characterPortrayed={characterPortrayed}
            key = {characterId}
            />
        )
    }) :null




    return (

        <React.Fragment>
            {loading ? <Spinner/> : newArray}
            {/* {console.log(RawCharactersData)} */}
        </React.Fragment>
    )
}

export default CharacterData