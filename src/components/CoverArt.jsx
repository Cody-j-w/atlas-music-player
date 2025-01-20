export default function CoverArt(props) {
    return (
        <div className="w-96">
            <img className="object-scale-down rounded-md" src={props.coverArt}></img>
        </div>
    )
}