import './Playlist.css'

export default function Playlist(props: {currentPlaylist: any, setSelectedSong: any}) {

    const setSong = (track: any) => {
        props.setSelectedSong(track.track.uri)
    }


    return (
        <div>{props.currentPlaylist.trackName.map((track: any, i: number) => {
            return (
                <div key={i} onClick={() => setSong(track)} className='flex-row m-10 selected-hover'>
                    <img src={track.track.album.images[0].url} alt="" height={64} width={64}/>
                    <div key={i}> 
                        <div>{track.track.name}</div>
                        <div className='artist-color'>{track.track.artists[0].name}{track.track.artists[2] ? ' & ' + track.track.artists[2].name : null}</div>
                    </div>
                </div>
            )
        })}</div>
    )
}