import classes from './Avatar.module.css';
export default function FlipCard({front, children}) {
    return <div class={classes.cardFront}>
               <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Portrait_placeholder.png/600px-Portrait_placeholder.png?20210811085635"></img>
           </div>
}