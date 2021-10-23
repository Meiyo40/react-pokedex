import { Component } from 'react';
import Pokedex from './Pokedex';
import Pokecard from './Pokecard';
import "./Pokegame.css";

class Pokegame extends Component {

    power = 0;

    selectPokemons() {
        let selectedPokemons = [];
        let selectedIndex = [];

        while (selectedPokemons.length < 4) {
            let rnd = Math.floor(Math.random() * Pokedex.defaultProps.length);
            if(!selectedIndex.includes(rnd)) {
                selectedPokemons.push(Pokedex.defaultProps[rnd]);
                selectedIndex.push(rnd);
            }
        }
        return selectedPokemons; 
    }

    render () {
        const pokemons = this.selectPokemons();
        pokemons.map( pokemon => this.power += pokemon.base_experience)
        return (            
            <div className="Pokegame">
                <p className="Pokegame-power"> Team Experience: { this.power } </p>
                <div className="Pokegame-team">
                    { pokemons.map( pokemon => <Pokecard data={pokemon} /> ) }
                </div>
            </div>
        );
    }
}

export default Pokegame;