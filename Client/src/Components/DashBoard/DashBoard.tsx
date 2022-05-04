import useAuth from '../useAuth/useAuth'
import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Tracklist from '../Tracklist/Tracklist'
import './DashBoard.css'
import Playback from "../Playback/Playback"

const spotifyApi = new SpotifyWebApi({
    clientId: 'd686ce0a39674c5eacd95c2640c83db2'
})

export default function DashBoard(props: { code: any }) {
    const accessToken = useAuth(props.code)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults]: any = useState([])
    const [selectedSong, setSelectedSong] = useState()
    console.log(searchResults)
    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        let cancel = false
        if(!search) return setSearchResults([])
        if(!accessToken) return
        spotifyApi.searchTracks(search).then(res => {
            if(cancel) return
            console.log(res.body.tracks?.items)
            setSearchResults(res.body.tracks?.items.map(tracks => {
                return {
                    name: tracks.name,
                    trackUri: tracks.uri,
                    artist: tracks.artists[0].name,
                    trackImg: tracks.album.images[0].url,
                }
            }))
        })
        return () => cancel = true
    }, [search, accessToken])

    return (
        <div className='dashboard-container'>
            <input type="text" 
            placeholder='Search Songs/Author' 
            value={search} 
            onChange={e => {
                setSearch(e.target.value)
            }}/>
            <Tracklist searchResults={searchResults} setSelectedSong={setSelectedSong}></Tracklist>
            <div className='flex-center'>
                <Playback accessToken={accessToken} searchResults={searchResults} selectedSong={selectedSong}></Playback>
            </div>

        </div>
    )
}