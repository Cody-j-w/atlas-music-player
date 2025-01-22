import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying(props: { coverArt: string, songTitle: string, artist: string }) {
    return (
        <div className="flex-auto w-full md:max-w-xl md:p-4 md:border-2 border-bright-red bg-silver dark:bg-charcoal">
            <CoverArt coverArt={props.coverArt} />
            <SongTitle songTitle={props.songTitle} artist={props.artist} />
            <PlayControls />
            <VolumeControls />
        </div>
    )
}