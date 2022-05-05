import Tracklist from "../Tracklist/Tracklist"

export default function SearchTab(props: {searchResults: any, setSearch: any, setSelectedSong: any, search: any}) {
    return (
        <div>
            <input type="text" 
            placeholder='Search Songs/Author' 
            value={props.search} 
            onChange={e => {
                props.setSearch(e.target.value)
            }}/>
            <Tracklist searchResults={props.searchResults} setSelectedSong={props.setSelectedSong}></Tracklist>
        </div>
    )
}