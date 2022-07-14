import React from 'react';
import '../styles/app.css';
import './app.i18n';
import PokemonListContainer from './components/PokemonList/container';

export default function App() {
  return (
    <div>
      <PokemonListContainer></PokemonListContainer>
    </div>
  );
}
