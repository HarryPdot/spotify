import "./SideBar.css"
import { useState, useEffect } from 'react'

export default function SideBar(props: {setSearchWindow: any, setLikedSongsWindow: any, playlist: any, setCurrentPlaylistId: any, setPlaylistWindow: any}) {

    const handleSearchWindow = () => {
        props.setSearchWindow(true)
        props.setLikedSongsWindow(false)
        props.setPlaylistWindow(false)
    }

    const handleLikedSongsWindow = () => {
        props.setLikedSongsWindow(true)
        props.setSearchWindow(false)
        props.setPlaylistWindow(false)
    }

    const handlePlaylistSong = (userPlaylist: any) => {
        props.setLikedSongsWindow(false)
        props.setSearchWindow(false)
        props.setPlaylistWindow(true)
        props.setCurrentPlaylistId(userPlaylist.id)
    }

    return(
        <div className="SideBar-container">
            <div className="burger-icon">- - -</div>
            <nav className="top-left-home-bar">
                <ul>
                    <li>Home</li>
                    <li onClick={handleSearchWindow}>Search</li>
                    <li>Your Library</li>
                </ul>
                <ul>
                    <li>Create Playlist</li>
                    <li onClick={handleLikedSongsWindow}>Like Songs</li>
                </ul>
            </nav>
            <div className="SideBar-playlist">
                {props.playlist.map((userPlaylist: any, i: number) => {
                    return <div key={i} className='pointer playlist-color flex-row padding-3 hover-white' onClick={() => {handlePlaylistSong(userPlaylist)}}>{userPlaylist.name}</div>
                })}
            </div>
        </div>
    )
}