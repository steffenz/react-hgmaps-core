/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import Map from '../../src';

const key = '';

const onReady = (id) => {
    new google.maps.Map(document.getElementById(id), {
        center: {lat: 58.9698815, lng: 5.7277081},
        zoom: 14,
    });
}


const App = () => (
    <Map id="test" apiKey={key} onReady={onReady}/>
);
render(<App />, document.getElementById("root"));