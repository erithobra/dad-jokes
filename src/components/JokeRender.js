import React from 'react';

const JokeRender = (props) => {
    console.log("the jokerender");
    return(
        <div>
            <h6>{props.joke.joke}</h6>
            <button onClick={props.refreshJoke}>New Joke</button>
        </div>
    )
}

export default JokeRender;