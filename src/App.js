import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar'
import Body from './containers/Body/Body'
import { useSelector } from 'react-redux';

function App() {
  const numberOfCharacters = useSelector(state => state.numberOfCharacters)
  const [myClassName, setMyClassName] = useState('App')


  useEffect(() => {
    if (numberOfCharacters > 5 && numberOfCharacters < 10) {
      setMyClassName('App_10')
    }
    if (numberOfCharacters > 10 && numberOfCharacters < 15) {
      setMyClassName('App_15')
    }

    if (numberOfCharacters > 15 && numberOfCharacters < 20) {
      setMyClassName('App_20')
    }

    if(numberOfCharacters >= 57) {
      setMyClassName('App_57')
    }
  }, [numberOfCharacters])

  return (
    <React.Fragment>
      <Navbar />
      <div className={myClassName} >
        <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
