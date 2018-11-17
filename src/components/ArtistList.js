import React from 'react';

export default ({artists}) => (
    <div>
        <h1>Favorite Artists</h1>
        <ul>
        {
            artists.map((artist) => (
                <li key={artist.id}>
                    {artist.name}
                </li>
            ))
        }
        </ul>
    </div>
)
