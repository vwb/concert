import React from 'react';
import {redirectToSpotifyConnect} from '../api/authentication';

export default ({shouldRender}) => {
    let component = null;

    if (shouldRender) {
        component = (
            <button onClick={redirectToSpotifyConnect}>
                Connect me
            </button>    
        )
    }

    return component;
}
