import useAuth from '../useAuth/useAuth'
import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import './DashBoard.css'
import Playback from "../Playback/Playback"
import SideBar from '../SideBar/SideBar'
import SearchTab from '../SearchTab/SearchTab'
import LikedSongs from '../LikedSongs/LikedSongs'

const spotifyApi = new SpotifyWebApi({
    clientId: 'd686ce0a39674c5eacd95c2640c83db2'
})

export default function DashBoard(props: { code: any }) {
    const accessToken = useAuth(props.code)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults]: any = useState([])
    const [selectedSong, setSelectedSong] = useState()
    const [playSong, setPlaySong] = useState(false)
    const [searchWindow, setSearchWindow] = useState(false)
    const [likedSongsWindow, setLikedSongsWindow] = useState(false)
    const [likedSongs, setLikedSongs]: any = useState([])

    useEffect(() => setPlaySong(true), [selectedSong])

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

    useEffect(() => {
        spotifyApi.getMySavedTracks({
            limit : 50,
            offset: 10
        })
        .then(data => {
            setLikedSongs(data.body.items.map(track => {
                return {
                    name: track.track.name,
                    trackUri: track.track.uri,
                    artist: track.track.artists[0].name,
                    trackImg: track.track.album.images[0].url,
                }
            }))
        })
    }, [accessToken])

    return (
        <div className='dashboard-container'>
            <SideBar setSearchWindow={setSearchWindow} setLikedSongsWindow={setLikedSongsWindow}></SideBar>
            <section className='wh-100 flex-btwn'>
                <li className='window'>
                    {searchWindow ? <SearchTab search={search} setSelectedSong={setSelectedSong} searchResults={searchResults} setSearch={setSearch}></SearchTab> : null}
                    {likedSongsWindow ? <LikedSongs setSelectedSong={setSelectedSong} likedSongs={likedSongs}></LikedSongs> : null}   
                </li>
                <Playback accessToken={accessToken} setPlaySong={setPlaySong} playSong={playSong} searchResults={searchResults} selectedSong={selectedSong}></Playback>
            </section>
        </div>
    )
}