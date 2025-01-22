import PlayListItem from "./PlayListItem"

type Song = {
    songTitle: string,
    artist: string,
    songLength: string
}

type Props = {
    playList: Song[]
}

export default function PlayList(props: Props) {
    return (
        <div className="flex-auto w-full md:max-w-xl md:p-4 md:border-2 border-bright-red bg-silver dark:bg-charcoal">
            {props.playList.map(song => <PlayListItem key={song.songTitle} songTitle={song.songTitle} artist={song.artist} songLength={song.songLength} />)}
        </div>
    )
}