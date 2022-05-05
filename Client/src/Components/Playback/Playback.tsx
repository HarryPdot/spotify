import SpotifyPlayer from 'react-spotify-web-playback'
import { useEffect } from 'react'
import './Playback.css'

export default function Playback(props: {accessToken: any, searchResults: any, selectedSong: any, setPlaySong: any, playSong: boolean}) {
    if(!props.accessToken) return null
    console.log(props.playSong)
    return (
        <div className='spotifyPlayer-container'>
            <SpotifyPlayer 
            token={props.accessToken}
            showSaveIcon
            uris={props.selectedSong ? [props.selectedSong.trackUri] : []}
            play= {props.playSong ? true : false}
            callback={state => {
                if(!state.isPlaying) {
                    props.setPlaySong(false)
                }
            }}
            styles={{
                bgColor:'#000000',
                color: '#FFFFFF',
                trackNameColor: '#FFFFFF',
                sliderColor: '#FFFFFF',
                sliderHandleColor: '#FFFFFF'
            }}
            />
        </div>
    )
}