const SPOTIFY_URL_BASE_URL = 'https://api.spotify.com/v1/me'

export const getUserSpofityData = (accessToken) => fetch(
    `${SPOTIFY_URL_BASE_URL}/top/artists/`,
    {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    }
).then((response) => response.json())
