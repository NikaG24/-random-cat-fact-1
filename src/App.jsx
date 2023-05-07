import './App.css'
import Toggle from 'react-styled-toggle';

const App = () => {

  return (
    <div className="App">
      <Toggle width={40} height={22} sliderWidth={15} sliderHeight={15} translate={15} backgroundColorChecked='#0F0F0F' />
      <h1 className='title'>Welcome to <br /> Random Cat Fact</h1>
      <p className='sub-title'>Click on the button <br /> to generate a cat fact</p>
      <button>Generate fact</button>
      {/* <img src="" alt="Random cat image" /> */}
      <p className="random-fact">This is a random cat fact meow meow meow meow meow and meow meow meow meow</p>
      {/* TODO: colocar tag image */}
      <div className="image"></div>
    </div>
  )
}

export default App
