import './Tracklist.css'
import { useEffect } from 'react'

export default function Tracklist(props: {search: any, searchResults:any, setSelectedSong: any}) {
    const selectSong = (track: any) => {
        props.setSelectedSong(track)
    }
    return (
        <div className='tracklist-container'>
            {props.search != '' ? <div className='searching-for'>Top Results: </div> : null}
            {props.searchResults.map((track: any, i: number) => {
                return (
                    <div key={i} className="flex-row m-10" onClick={() => selectSong(track)}>
                        <img src={track.trackImg} alt="" height={64} width={64}/>
                        <div key={i}>{track.name}</div>
                    </div>
                    )
            })}
        </div>
    )
}