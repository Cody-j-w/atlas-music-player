import PlayListItem from "./PlayListItem"

type Song = {
    title: string,
    artist: string,
    duration: number,
    id: string
}

type Props = {
    playList: Song[],
    currentTrack: string | null,
    setCurrentTrack: (songId: string) => void
}

export default function PlayList(props: Props) {
    return (
        <div className="flex-auto w-full md:max-w-xl md:p-4 md:border-2 border-bright-red bg-silver dark:bg-charcoal">
            {props.playList.map(song => <PlayListItem key={song.title} songTitle={song.title} artist={song.artist} duration={song.duration} songId={song.id} currentTrack={props.currentTrack} setCurrentTrack={props.setCurrentTrack} />)}
        </div>
    )
}