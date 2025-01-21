import PlayListItem from "./PlayListItem"
export default function PlayList(props) {
    return (
        <div className="flex-auto w-full md:max-w-xl md:p-4 md:border-2 border-bright-red bg-silver dark:bg-charcoal">
            {props.playList.map(song => <PlayListItem key={song.songTitle} songTitle={song.songTitle} artist={song.artist} songLength={song.songLength} />)}
        </div>
    )
}