import React from 'react'

const GetCharacter = (props) => {
    return (
        <div className="Test">
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    {props.image}
                </div>
                <div className="flip-box-back">
                    <h2>{props.characterName}</h2>
                    {props.characterNick ? <p>a.k.a {props.characterNick}</p> : null}
                    <p><strong>Birthday : </strong>{props.characterBirthday}</p>
                    <p><strong>Occupation : </strong>{props.characterOccupation}</p>
                    <p><strong>Portrayed : </strong>{props.characterPortrayed}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default GetCharacter