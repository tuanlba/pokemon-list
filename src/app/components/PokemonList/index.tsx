import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import PokemonItem from '~/app/components/PokemonItem';
import { PokemonContext } from '../../contexts/PokemonContext';
import Pokeball from '../../images/pokeball.png';

const PokemonList: React.FC = () => {
  const { pokemons, loading } = useContext(PokemonContext);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  return (
    <div className="pokemon-list-container">
      {loading && (
        <div className="loading-container">
          <img src={Pokeball} alt="Pokeball" className="loading" />
        </div>
      )}

      <ul>
        {!loading &&
          filteredPokemons.map((pokemon) => (
            <a key={pokemon.id} className="pokemon-link" href="#none">
              <PokemonItem pokemon={pokemon} />
            </a>
          ))}
      </ul>
    </div>
  );
};

export default PokemonList;
