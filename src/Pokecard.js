import { Component } from 'react';
import './Pokecard.css';

//const POKE_IMG_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_IMG_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {

    formatedId () {
        //to being able to use the new assets we must format the idea as 00x.png / 0xx.png / xxx.png
        return this.props.data.id < 999 ? ("00" + this.props.data.id).slice(-3) : this.props.data.id;
    }

    render () {

        let imgSrc = POKE_IMG_API + this.formatedId() + ".png";

        return (            
        <div className="Pokecard" id={this.props.data.id}>
            <h1 className="Pokecard-name">{this.props.data.name}</h1>
            <div className="Pokecard-image">
                <img src={ imgSrc } alt="Pokemon View"></img>
            </div>
            <p className="Pokecard-type">TYPE: {this.props.data.type}</p>            
            <p className="Pokecard-experience">EXP: {this.props.data.base_experience}</p>
        </div>
        );
    }
}

export default Pokecard;