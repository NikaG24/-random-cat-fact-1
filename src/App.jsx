import { createContext, useState } from 'react';
import './App.css';
import axios from 'axios';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState("dark")

  const handleTheme = () => {
    setTheme((curr) => curr === "dark" ? "light" : "dark")
  }

  const [catFact, setCatFact] = useState(null);
  const [catImage, setCatImage] = useState(null);

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then(res => {
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
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className="App" id={theme}>
        <div className="toggle">
          <ReactSwitch onChange={handleTheme} checked={theme === 'light'}
            checkedIcon={false} uncheckedIcon={false} onColor='#0F0F0F'
            handleDiameter={18} height={24}
          />
        </div>
        <h1 className="title">Welcome to <br /> Random Cat Fact</h1>
        <p className="sub-title">Click on the button <br /> to generate a cat fact</p>
        <button onClick={handleClick}>Generate fact</button>
        {catFact !== null && <p className="random-fact">{catFact}</p>}
        {catImage !== null && <img src={catImage} alt="A random cat image" className="cat-image" />}
      </div>
    </ThemeContext.Provider >
  );
};

export default App;
