import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.scss';

import ConnectToSpotify from './components/ConnectToSpotify';
import {getUserSpofityData} from './api/spotify';

const LoadingOverlay = ({shouldRender}) => {
    let component = null;

    if (shouldRender) {
        component = (
            <div style={{fontSize: '200px'}}>I AM LOADING</div>
        );
    }
    
    return component;
}

class App extends PureComponent {
    state = {
        isAuthenticated: false,
        isLoading: false,
        artists: [],
    }

    componentDidMount() {
        if (window.location.hash.includes('access_token')) {
            this.setState({
                isAuthenticated: true,
                isLoading: true,
            }, () => {
                const access_token = window.location.hash.split('&')[0].split('=')[1];

                getUserSpofityData(access_token)
                    .then(({items}) => {
                        this.setState({
                            artists: items,
                            isLoading: false,
                        })
                    })
            })
        }
    }

    render() {
        const {
            isLoading,
            isAuthenticated,
            artists,
        } = this.state;

        return (
            <div className="App">
                <LoadingOverlay shouldRender={isLoading} />
                <ConnectToSpotify shouldRender={!isAuthenticated} />
                <ul>
                {
                    artists.map((artist) => (
                        <li key={artist.id}>{artist.name}</li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default App;
