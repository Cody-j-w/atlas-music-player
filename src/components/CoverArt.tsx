

export default function CoverArt(props: { coverArt: string }) {
    return (
        <div>
            <img className="rounded-md" src={props.coverArt}></img>
        </div>
    )
}