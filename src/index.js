import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
class App extends Component {
    render () {
        return (
            <div>
                <Pokedex />

                <Pokegame team-id={1}/>                
                <Pokegame team-id={2}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));