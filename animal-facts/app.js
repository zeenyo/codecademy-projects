import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


const background = (
  <img 
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"
   />
);

function displayFact(e) {
  const facts = animals[e.target.alt].facts;
  const randomFactIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomFactIndex];
  document.getElementById('fact').innerHTML = fact;
}

const images = [];
for (const animal in animals) {
  images.push(
  <img 
  onClick={displayFact}
  key={animal}   
  className='animal'
  alt={animal}
  src= {animals[animal].image}
  aria-label={animal}
  role= 'button'
  />
  );
};

const title = '';
const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {(showBackground === true) && background}
    <p id='fact'></p>
    <div className='animals'>
    {images}
    </div>
  </div>
  );

ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);
