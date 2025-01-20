export default function SongTitle(props) {
    return (
        <div>
            <h2 className="text-3xl font-bold my-3">{props.songTitle}</h2>
            <p className="text-xl text-gray-500/75 font-semibold">{props.artist}</p>
        </div>
    )
}