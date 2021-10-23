import { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {

    render () {
        return (            
        <div className="Pokecard" id={this.props.data.id}>
            <h1 className="Pokecard-name">{this.props.data.name}</h1>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.data.id + ".png"} alt="Pokemon"></img>
            <p className="Pokecard-type">TYPE: {this.props.data.type}</p>            
            <p className="Pokecard-experience">EXP: {this.props.data.base_experience}</p>
        </div>
        );
    }
}

export default Pokecard;