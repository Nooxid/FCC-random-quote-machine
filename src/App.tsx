import { useState } from 'react';
import quotes from '/Users/diegofarina1/Desktop/Coding/FreeCodeCamp/Build a Random Quote Machine/random-quote-machine/src/assets/quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRamdomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${blue}, ${green})`;
};

const transition = "all 1s";
    
function App() {
  const [quote, setQuote] = useState<Quote>(getRamdomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRamdomQuote());
    setRandomColor(getRandomColor());
  };

  return ( 
  <div className='background' style={{ backgroundColor: randomColor, transition}}>
    <div id="quote-box">
      <div className='quote-content' style={{color: randomColor}}>
        <h2 id='text'>
        <FaQuoteLeft size="15" style={{marginRight: '5px'}}/>
          {quote.quote}
        <FaQuoteRight size="15" style={{marginLeft: '5px'}}/>
          </h2>
        <h4 id='author'>- {quote.author}</h4>
    </div>
    <div className="buttons">
      <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} `} 
      id="tweet-quote" style={
        {
          backgroundColor: randomColor,
          marginRight: '10px',
          textDecoration: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }
      }>
        <FaTwitter color="white" />
      </a>
      <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor}}>Change Quote</button>
    </div>
  </div>
   </div> 
  );
}

export default App
