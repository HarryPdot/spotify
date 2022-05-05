
export default function LikedSongs(props: {likedSongs: any, setSelectedSong: any}) {

    const selectSong = (track: any) => {
        props.setSelectedSong(track)
    }
    return(
        <div>
            <h1>Liked Songs</h1>
            {props.likedSongs.map((track: any, i: number) => {
                return(
                    <div key={i} className="flex-row m-10" onClick={() => selectSong(track)}>
                        <img src={track.trackImg} alt="" height={64} width={64}/>
                        <div key={i}>{track.name}</div>
                    </div>
                )
            })}
            <div></div>
        </div>
    )
}