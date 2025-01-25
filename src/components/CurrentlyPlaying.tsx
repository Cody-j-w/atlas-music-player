import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { useEffect, useState } from "react";

export default function CurrentlyPlaying(props: { currentTrack: string | null, next: () => void, prev: () => void, random: () => void }) {

    type Song = {
        id: string,
        title: string,
        artist: string,
        genre: string,
        duration: number,
        cover: string,
        song: string
    }
    const [track, setTrack] = useState<Song | null>(null);
    const getSongData = () => {
        fetch(`http://localhost:5173/api/v1/songs/${props.currentTrack}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then((res) => res.json())
            .then((data) => {
                setTrack(data)
            })
    }
    useEffect(() => {
        getSongData();
    }, [props.currentTrack, track])

    return (
        <div className="flex-auto w-full md:max-w-xl md:p-4 md:border-2 border-bright-red bg-silver dark:bg-charcoal">
            <CoverArt coverArt={track ? track.cover : 'placeholder.svg'} />
            <SongTitle songTitle={track ? track.title : 'Loading...'} artist={track ? track.artist : 'loading...'} />
            <PlayControls prev={props.prev} next={props.next} random={props.random} />
            <VolumeControls />
        </div>
    )
}