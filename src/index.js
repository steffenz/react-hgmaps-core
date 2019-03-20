import React, { useState, useEffect } from 'react';
export default ({ id = null, timeout = 15000, children, onReady, apiKey }) => {
    /* To-do: Add support for auto generated id */ 
    // const [ stateId ] = useState((id === null) ? `gmap-${new Date().valueOf()}` : id);
    useEffect(() => {
        let mapsUrl = `https://maps.google.com/maps/api/js?key=${apiKey}`;
        let allBodyScripts = Array.from(document.getElementsByTagName('script'));
        let exists = allBodyScripts.find(item => item.src === mapsUrl);
        
        if(!exists){
            window.mapsReady = new Promise((resolve, reject) => {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = mapsUrl;
                document.body.appendChild(s);            
                s.addEventListener('load', e => {
                    resolve(true);
                });

                // setTimeout(() => {
                //     console.error("Google Maps took longer than 15 seconds to load.");
                //     reject(true);
                // }, timeout);
            });
        }
        window.mapsReady.then(() => {
            onReady(id);
        });
    })
    
    return(
        <div style={{ width: '100%', height: 500}} id={id}>{children}</div>
    )
}