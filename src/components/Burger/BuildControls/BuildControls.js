import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: {props.price.toFixed(2)}</p>
        {controls.map(cntrl => (
        <BuildControl
            key={cntrl.label}
            label={cntrl.label}
            added={() => props.ingredientAdded(cntrl.type)}
            removed={() => props.ingredientRemoved(cntrl.type)}
            disabled={props.disabled[cntrl.type]}
        />
        )
    )}
    <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default BuildControls;