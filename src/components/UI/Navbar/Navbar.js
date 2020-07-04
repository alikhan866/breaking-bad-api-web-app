import React, { useState } from 'react'
import classes from './Navbar.module.css'
import { useDispatch } from 'react-redux'
import { selectAction } from '../../../store/actions/actions'
import Logo from '../../../images/BB_S5_excl_namelab_c.jpg'
const Navbar = (props) => {
    const dispatch = useDispatch()
    const [selectedCharacter, setSelectedCharacter] = useState(false)
    const [selectedQuote, setSelectedQuote] = useState(false)

    const dropDownCharacterSelected = (value) => {
        if (value !== '-----------') {
            setSelectedCharacter(true)
            dispatch(selectAction(value))
        }
        else {
            dropDownCharacterDeSelected(value)
            dispatch(selectAction(null))
        }
    }

    const dropDownCharacterDeSelected = () => {
        setSelectedCharacter(false)
    }



    const dropDownQuoteSelected = (value) => {
        if (value !== '-----------') {
            setSelectedQuote(true)
            dispatch(selectAction(value))
        }
        else {
            dropDownQuoteDeSelected(value)
            dispatch(selectAction(null))
        }
    }

    const dropDownQuoteDeSelected = () => {
        setSelectedQuote(false)
    }



    return (
        <nav className={classes.Navbar}>
            <img src={Logo} alt="Logo" width="100" height="60"/>
            <div>
                <label>Characters</label>
                <select disabled={selectedQuote} onChange={event => dropDownCharacterSelected(event.target.value)}>
                    <option value="-----------">-----------</option>
                    <option value="Get character by id" >Get character by id</option>
                    <option value="Get character by category">Get character by category</option>
                    <option value="Get random character">Get random character</option>
                    <option value="Search character by name">Search character by name</option>
                </select>
                <label>Quotes</label>
                <select disabled={selectedCharacter} onChange={event => dropDownQuoteSelected(event.target.value)}>
                    <option value="-----------">-----------</option>
                    <option value="Get quote by id">Get quote by id</option>
                    <option value="Get quotes by series">Get quotes by series</option>
                    <option value="Get a random quote">Get a random quote</option>
                    <option value="Get quote by author">Get quote by author</option>
                    <option value="Get a random quote by author">Get a random quote by author</option>
                </select>
            </div>
        </nav>
    )
}

export default Navbar