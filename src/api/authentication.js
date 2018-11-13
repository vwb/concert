import {formatUrl} from 'url-lib'

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '40d052e2bda64045bb26c72956a3e198';
const REDIRECT_URI = 'http://localhost:3000';
const SCOPES = 'user-top-read';

//Add state to prevent CSRF 
//https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
const spotifyAuthUrl = (clientId) =>  {
    return formatUrl(AUTH_URL, {
        'client_id': clientId,
        'response_type': 'token',
        'redirect_uri': REDIRECT_URI,
        'scope': SCOPES,
    });
}

export const redirectToSpotifyConnect = () => {
    window.location = (spotifyAuthUrl(CLIENT_ID));
};
