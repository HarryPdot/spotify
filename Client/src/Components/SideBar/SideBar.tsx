import "./SideBar.css"
import { useState, useEffect } from 'react'

export default function SideBar(props: {setSearchWindow: any, setLikedSongsWindow: any}) {

    const handleSearchWindow = () => {
        props.setSearchWindow(true)
        props.setLikedSongsWindow(false)
    }

    const handleLikedSongsWindow = () => {
        props.setLikedSongsWindow(true)
        props.setSearchWindow(false)
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
                <div>yes</div>
                <div>yes</div>
                <div>yes</div>
                <div>yes</div>
            </div>
        </div>
    )
}