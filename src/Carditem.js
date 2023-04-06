import React from 'react';

const Carditem = ({ name, imageUrl, bgcolorofcard, bgability1, bgability2, ability1, ability2, abilitynum}) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '2rem',
        padding: '20px',
        backgroundColor: bgcolorofcard,
        width: '10vw',
        height: 'fit-contents',
        marginTop: '2vh',
        justifyContent : 'center',
        
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1vh',
        }}
      >
        <button
          style={{
            backgroundColor: bgability1,
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'default',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
            marginRight: '1vw',
          }}
        >
          {ability1}
        </button>
        {abilitynum === 2 && (
          <button
            style={{
              backgroundColor: bgability2,
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'default',
              boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
            }}
          >
            {ability2}
          </button>
        )}
      </div>
      <h2 style={{ margin: '1vh 0' }}>{formattedName}</h2>
      <a href={`https://www.pokemon.com/us/pokedex/${name}`} target='_blank'>

      <button
        style={{
          backgroundColor: '#2196f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
          marginTop: 'auto',
          textAlign: 'center',
          maxWidth: '100%',
        }}
        >
        Click Here
      </button>
        </a>
    </div>
  );
};

export default Carditem;
