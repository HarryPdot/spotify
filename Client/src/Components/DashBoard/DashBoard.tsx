import useAuth from '../useAuth/useAuth'
import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import './DashBoard.css'
import Playback from "../Playback/Playback"
import SideBar from '../SideBar/SideBar'
import SearchTab from '../SearchTab/SearchTab'

const spotifyApi = new SpotifyWebApi({
    clientId: 'd686ce0a39674c5eacd95c2640c83db2'
})

export default function DashBoard(props: { code: any }) {
    const accessToken = useAuth(props.code)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults]: any = useState([])
    const [selectedSong, setSelectedSong] = useState()
    const [playSong, setPlaySong] = useState(false)
    const [searchWindow, setSearchWindow] = useState(true)

    useEffect(() => setPlaySong(true), [selectedSong])
    console.log(playSong)
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
            <SideBar></SideBar>
            <div className='wh-100 flex-btwn'>
                <div className='window'>
                    {searchWindow ? <SearchTab search={search} setSelectedSong={setSelectedSong} searchResults={searchResults} setSearch={setSearch}></SearchTab> : null}   
                </div>
                <Playback accessToken={accessToken} setPlaySong={setPlaySong} playSong={playSong} searchResults={searchResults} selectedSong={selectedSong}></Playback>
            </div>


        </div>
    )
}