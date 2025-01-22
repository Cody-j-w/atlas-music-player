export default function PlayListItem(props: { songTitle: string, artist: string, songLength: string }) {
    return (
        <div className="flex justify-between my-3 hover:bg-bright-red group">
            <div>
                <p className="font-semibold text-lg dark:text-bright-red text-charcoal dark:group-hover:text-charcoal ">{props.songTitle}</p>
                <p className="font-semibold text-md dark:text-silver text-charcoal dark:group-hover:text-charcoal ">{props.artist}</p>
            </div>
            <div>
                <p className="font-semibold text-md dark:text-silver text-charcoal dark:group-hover:text-charcoal ">{props.songLength}</p>
            </div>
        </div>
    )
}