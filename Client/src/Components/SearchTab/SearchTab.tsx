import Tracklist from "../Tracklist/Tracklist"
import './SearchTab.css'

export default function SearchTab(props: {searchResults: any, setSearch: any, setSelectedSong: any, search: any}) {
    return (
        <div>
            <input 
            className="searchtab-container"
            type="text" 
            placeholder='Search Songs/Author' 
            value={props.search} 
            onChange={e => {
                props.setSearch(e.target.value)
            }}/>
            <Tracklist search= {props.search} searchResults={props.searchResults} setSelectedSong={props.setSelectedSong}></Tracklist>
        </div>
    )
}