import { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [catFact, setCatFact] = useState(null);
  const [catImage, setCatImage] = useState(null);

  const fetchCatFact = () => {
    axios.get('https://catfact.ninja/fact').then(res => {
      setCatFact(res.data.fact);
      fetchCatImage();
    });
  };

  const fetchCatImage = () => {
    axios.get(`https://cataas.com/cat?type=sq${new Date().getTime()}`).then(res => {
      setCatImage(res.config.url);
    });
  };

  const handleClick = () => {
    fetchCatFact();
  };

  return (
    <div className="App">
      <h1 className='title'>Welcome to <br /> Random Cat Fact</h1>
      <p className='sub-title'>Click on the button <br /> to generate a cat fact</p>
      <button onClick={handleClick}>Generate fact</button>
      {catFact !== null && <p className="random-fact">{catFact}</p>}
      {catImage !== null && <img src={catImage} alt="A random cat image" className='cat-image' />}
    </div>
  );
};

export default App;
