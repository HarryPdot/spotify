import SpotifyPlayer from 'react-spotify-web-playback'
import { useEffect } from 'react'
import './Playback.css'

export default function Playback(props: {accessToken: any, searchResults: any, selectedSong: any}) {

    if(!props.accessToken) return null
    return (
        <div className='spotifyPlayer-container'>
            <SpotifyPlayer 
            token={props.accessToken}
            showSaveIcon
            uris={props.selectedSong ? [props.selectedSong.trackUri] : []}
            styles={{
            
            }}
            />
        </div>
    )
}