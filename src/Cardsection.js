import React from 'react';
import pokemondetails from './pokemon';
import Carditem from './Carditem';

function Cardsection({ filterValue }) {
  let filteredPokemon = pokemondetails;

  if (filterValue !== 'all') {
    filteredPokemon = filteredPokemon.filter((pokemon) => pokemon.pokemonability.includes(filterValue));
  }

  const getAbilityBgColor = (abilityType) => {
    switch (abilityType) {
      case 'Grass':
        return '#8BBE8A';
      case 'Fire':
        return '#FFA756';
      case 'Water':
        return '#58ABF6';
      case 'Bug':
        return '#8BD674';
      case 'Normal':
        return '#A4ACAF';
      case 'Poison':
        return '#9F469E';
      case 'Electric':
        return '#F2CB55';
      case 'Fighting':
        return '#EB4971';
      case 'Psychic':
        return '#F97176';
      case 'Rock':
        return '#BAAB82';
      case 'Ground':
        return '#F78551';
      case 'Dragon':
        return '#6F35FC';
      case 'Ice':
        return '#96D9D6';
      case 'Ghost':
        return '#7B62A3';
      case 'Dark':
        return '#707070';
      case 'Steel':
        return '#557C8D';
      case 'Fairy':
        return '#D685AD';
      case 'Flying':
        return '#A890F0';
      default:
        return '#000';
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'auto', gridGap: '2vw', overflowY: 'auto' }}>
      {filteredPokemon.map((pokemon) => (
        <Carditem
          key={pokemon.pokemonnum}
          name={pokemon.pokemonname}
          imageUrl={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.pokemonnum}.png`}
          bgcolorofcard="#f3f3f3"
          bgability1={getAbilityBgColor(pokemon.pokemonability[0])}
          bgability2={pokemon.pokemonability.length > 1 ? getAbilityBgColor(pokemon.pokemonability[1]) : ''}
          ability1={pokemon.pokemonability[0]}
          ability2={pokemon.pokemonability.length > 1 ? pokemon.pokemonability[1] : ''}
          abilitynum={pokemon.pokemonability.length}
        />
      ))}
    </div>
  );
}

export default Cardsection;
