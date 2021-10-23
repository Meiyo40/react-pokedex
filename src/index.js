import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
class App extends Component {
    render () {
        return (
            <div>
                <Pokedex />

                <Pokegame />    
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));