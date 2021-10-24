import { Component } from 'react';
import Pokedex from './Pokedex';
import Pokecard from './Pokecard';
import "./Pokegame.css";

class Pokegame extends Component {

    power = {teamA : 0, teamB : 0};

    selectPokemons() {
        let selectedPokemons = [];
        let selectedIndex = [];

        while (selectedPokemons.length < 4) {
            let rnd = Math.floor(Math.random() * Pokedex.defaultProps.pokemons.length);
            if(!selectedIndex.includes(rnd)) {
                selectedPokemons.push(Pokedex.defaultProps.pokemons[rnd]);
                selectedIndex.push(rnd);
            }
        }
        return selectedPokemons; 
    }

    render () {
        let teamA = this.selectPokemons();
        let teamB = this.selectPokemons();
        //getExp
        teamA.map( pokemon => this.power.teamA += pokemon.base_experience)        
        teamB.map( pokemon => this.power.teamB += pokemon.base_experience)
        const WINNER = this.power.teamA >  this.power.teamB ? "A" : "B";

        return (            
            <div className="Pokegame">
                <div className="Pokegame-team">
                    <p className="Pokegame-power"> Team Experience: { this.power.teamA } 
                         <span className={ WINNER === "A" ? "class-winner" : "class-loser" }>{ WINNER === "A" ? " WINNER" : " LOSER" }</span> 
                    </p>
                    <div className="Pokegame-cards">
                        { teamA.map( pokemon => <Pokecard data={pokemon} /> ) }
                    </div>
                </div>

                <div className="Pokegame-team">
                    <p className="Pokegame-power"> Team Experience: { this.power.teamB } 
                        <span className={ WINNER === "B" ? "class-winner" : "class-loser" }>{ WINNER === "B" ? " WINNER" : " LOSER" }</span>
                    </p>
                    <div className="Pokegame-cards">
                        { teamB.map( pokemon => <Pokecard data={pokemon} /> ) }
                    </div>
                </div>                
            </div>
        );
    }
}

export default Pokegame;