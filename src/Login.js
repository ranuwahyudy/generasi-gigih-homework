import React from "react"

// const spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
    return (
        <div className="container">
            <a className="btn-login" href={AUTH_URL}>Login With Spotify</a>
        </div>
    )
}