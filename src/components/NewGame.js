import React from "react";

export default function NewGame(props) {
    return (
        <div>
            <h3>Thankyou for playing!</h3>
            <h4>Your score was {props.score}/5</h4>
            <button onClick={(()=>props.handleClick())}>Play Again</button>
        </div>
    )
}