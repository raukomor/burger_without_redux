import React, { Component } from 'react';

import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummaty] WillUpdate');
    }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);

        });

        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>Adelicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={"Success"} clicked={this.props.purchaseContinued}>CONTINUE</Button>

            </Auxi>
        )
    }

}

export default OrderSummary; 