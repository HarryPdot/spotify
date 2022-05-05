import "./SideBar.css"
import { useState, useEffect } from 'react'

export default function SideBar(props: {setSearchWindow: any}) {

    return(
        <div className="SideBar-container">
            <div className="burger-icon">- - -</div>
            <nav className="top-left-home-bar">
                <ul>
                    <li>Home</li>
                    <li onClick={() => props.setSearchWindow(true)}>Search</li>
                    <li>Your Library</li>
                </ul>
                <ul>
                    <li>Create Playlist</li>
                    <li>Like Songs</li>
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