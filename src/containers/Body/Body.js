import React from 'react'
import { useSelector } from 'react-redux';
import * as selectedActionTypes from '../../store/actions/selectedActionTypes'
import GetCharacterById from '../../components/GetCharacterById/GetCharacterById'
import GetCharacterByCategory from '../../components/GetCharacterByCategory/GetCharacterByCategory'
import GetRandomCharacter from '../../components/GetRandomCharacter/GetRandomCharacter'
import GetCharacterByName from '../../components/GetCharacterByName/GetCharacterByName'
const Body = (props) => {
    const selectedAction = useSelector(state => state.actionName)
    console.log(selectedAction)
    let content = null
    if (selectedAction === selectedActionTypes.GET_CHARACTER_BY_ID) {
        content = (
                <GetCharacterById />
        )
    }
    if (selectedAction === selectedActionTypes.GET_CHARACTER_BY_CATEGORY) {
        content = (
            <GetCharacterByCategory/>
        )
    }
    if(selectedAction === selectedActionTypes.GET_RANDOM_CHARACTER) {
        content = (
            <GetRandomCharacter/>
        )
        }
    if(selectedAction === selectedActionTypes.SEARCH_CHARACTER_BY_NAME) {
        content = (
            <GetCharacterByName/>
        )
    }
    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

export default Body