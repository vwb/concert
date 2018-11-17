import React from 'react';

export default ({shouldRender, children}) => {
    let component = null;

    if (shouldRender) {
        component = children;
    }

    return component;
}
