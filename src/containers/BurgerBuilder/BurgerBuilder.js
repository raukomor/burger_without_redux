import React, { Component } from 'react';


import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    //####old sintaxe
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 0
        }
    }
    
    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxi>
        );
    }
}

export default BurgerBuilder; 