import React, { useState } from 'react'
import './GetCharacterByCategory.css'
import GetCharacters from '../GetCharacters/GetCharacters'

const GetCharacterByCategory = (props) => {

    const [selectedValue,setSelectedValue] = useState(null)

    const handleSelection = (dropDownSelectValue) => {
        setSelectedValue(dropDownSelectValue)
    }

    return (
        <div className="Character">
            {console.log(selectedValue)}
            <select onChange={(event) => handleSelection(event.target.value)}>
                <option value={null}>-----------</option>
                <option value="Breaking+Bad">Breaking Bad</option>
                <option value="Better+Call+Saul">Better Call Saul</option>
            </select>
            <GetCharacters
            key={Math.random()}
            url ={`https://www.breakingbadapi.com/api/characters?category=${selectedValue}`}
            clicked={true}
            />
        </div>
    )
}

export default GetCharacterByCategory