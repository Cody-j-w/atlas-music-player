export default function PlayListItem(props: { songTitle: string, artist: string, songId: string, duration: number, currentTrack: string | null, setCurrentTrack: (songId: string) => void }) {
    const numToTime = (num: number): string => {
        const hours = Math.floor(num / 60);
        let minutes = num % 60;
        if (minutes === 0) {
            return `${hours}:${minutes}0`
        } else {
            return `${hours}:${minutes}`
        }
    }
    const trackChange = () => {
        props.setCurrentTrack(props.songId)
    }

    return (
        <div onClick={trackChange} className={props.currentTrack === props.songId ? 'flex justify-between my-3 hover:bg-bright-red group border-2 p-2 border-silver text-chrome-gold' : 'flex justify-between my-3 hover:bg-bright-red group'}>
            <div>
                <p className={props.currentTrack === props.songId ? 'font-semibold text-lg bg-charcoal text-chrome-gold' : "font-semibold text-lg dark:text-silver text-charcoal dark:group-hover:text-charcoal "}>{props.songTitle}</p>
                <p className={props.currentTrack === props.songId ? 'font-semibold text-lg bg-charcoal text-chrome-gold' : "font-semibold text-lg dark:text-silver text-charcoal dark:group-hover:text-charcoal "}>{props.artist}</p>
            </div>
            <div>
                <p className={props.currentTrack === props.songId ? 'font-semibold text-lg bg-charcoal text-chrome-gold' : "font-semibold text-lg dark:text-silver text-charcoal dark:group-hover:text-charcoal "}>{numToTime(props.duration)}</p>
            </div>
        </div>
    )
}