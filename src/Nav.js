import React, { useState } from 'react';
import pokemondetails from './pokemon.js';
import './Nav.css';
import Cardsection from './Cardsection';

function Nav() {
  const pokemonTypes = ['All', ...new Set(pokemondetails.map(pokemon => pokemon.pokemonability).flat())];
  const pokemonCount = pokemondetails.length;
  const [filterValue, setFilterValue] = useState('all');

  const handleNavItemClick = (type) => {
    setFilterValue(type === 'All' ? 'all' : type);
  }

  return (
    <div className="nav-wrapper">
      <ul className="nav-container">
        <li className="nav-item">
          <a href="#" className={`nav-link${filterValue === 'all' ? ' active' : ''}`} onClick={() => handleNavItemClick('All')}>
            All<span>({pokemonCount})</span>
          </a>
        </li>
        {pokemonTypes.map((type, index) => (
          type !== 'All' &&
          <li key={index} className="nav-item">
            <a href="#" className={`nav-link${filterValue === type ? ' active' : ''}`} onClick={() => handleNavItemClick(type)}>
              {type}<span>({pokemondetails.filter(pokemon => pokemon.pokemonability.includes(type)).length})</span>
            </a>
          </li>
        ))}
      </ul>
      <Cardsection filterValue={filterValue} />
    </div>
  );
}

export default Nav;
