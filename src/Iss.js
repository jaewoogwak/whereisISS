import React from "react";

const Iss = (props) => {
    return (
        <div>
            <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                    <img src="https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png" class="br-100 h4 w4 dib ma4" title="Photo of a kitty staring at you" />
                    <h1 class="f4">International Space Station Current Location</h1>
                    <hr class="mw6 bb bw1 b--black-10 mt4" />
                </div>
                <p class="lh-copy measure center f6 black-70 tc pa2">
                    <h2>응답 : {props.data.message}</h2>
                    <h2>위도 : {props.data.iss_position.longitude}</h2>
                    <h2>경도 : {props.data.iss_position.latitude}</h2>
                    <h2>타임스탬프 : {props.data.timestamp}</h2>
                </p>
            </article>
            {'iss', console.log('Iss', props.data.iss_position)}
            
        </div>
    );

}

export default Iss;