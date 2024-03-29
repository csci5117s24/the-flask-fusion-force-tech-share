import classes from './FlipCard.module.css';

import { useState } from "react";

export default function FlipCard({front, children, onFlip}) {
    const [isFront, setIsFront] = useState(true);

    function flip() {
        onFlip();
        setIsFront(!isFront)
    }

    return <div onClick={flip}>
        {isFront ?
          <div class={classes.cardFront}>{front}</div>
        :  
        <div class={classes.cardBack}>{children}</div>
        }
    </div>
}
