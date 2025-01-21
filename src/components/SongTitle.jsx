export default function SongTitle(props) {
    return (
        <div>
            <h2 className="text-3xl text-charcoal dark:text-bright-red font-bold my-3">{props.songTitle}</h2>
            <p className="text-xl text-charcoal dark:text-silver font-semibold">{props.artist}</p>
        </div>
    )
}