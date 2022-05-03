import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=d686ce0a39674c5eacd95c2640c83db2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function LogIn(props: { code: any }) {
    return (
        <div>
            <a href={AUTH_URL}>Login with Spotify</a>
        </div>
    );
}
