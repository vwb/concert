import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.scss';

import ConnectToSpotify from './components/ConnectToSpotify';
import ArtistList from './components/ArtistList';
import ShouldRender from './components/ShouldRender';

import {getUserSpofityData} from './api/spotify';


//Extract artists/peformers to own context
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

                        window.location.replace('#');
                    })
            })
        }
    }

    render() {
        const {
            isLoading,
            isAuthenticated,
            artists = [],
        } = this.state;

        return (
            <div className="App">
                <ShouldRender shouldRender={isLoading}>
                    <div style={{fontSize: '200px'}}>I AM LOADING</div>
                </ShouldRender>
                <ShouldRender shouldRender={!isAuthenticated}>
                    <ConnectToSpotify shouldRender={!isAuthenticated} />
                </ShouldRender>
                <ShouldRender shouldRender={(artists.length > 0)}>
                    <ArtistList artists={artists} />
                </ShouldRender>
            </div>
        );
    }
}

export default App;
