export default function PlayListItem(props) {
    return (
        <div className="flex justify-between">
            <div>
                <p>{props.songTitle}</p>
                <p>{props.artist}</p>
            </div>
            <div>
                <p>{props.songLength}</p>
            </div>
        </div>
    )
}