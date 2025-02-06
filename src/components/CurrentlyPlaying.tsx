import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import AudioPlayer from "./AudioPlayer";
import { useEffect, useState } from "react";

export default function CurrentlyPlaying(props: { currentTrack: string | null, next: () => void, prev: () => void, random: () => void, handleShuffling: () => void }) {

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
    const [playing, setPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(50);
    const [playback, setPlayback] = useState<number>(1);

    const getSongData = () => {
        fetch(`api/v1/songs/${props.currentTrack}`,
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

    const handlePlaying = () => {
        console.log(!playing)
        if (playing) {
            setPlaying(false);
        } else {
            setPlaying(true);
        }
    }



    const handleVolume = (newVolume: number) => {
        setVolume(newVolume);
    }

    const handlePlayback = () => {
        if (playback === 1) {
            setPlayback(2);
        } else if (playback === 2) {
            setPlayback(0.5);
        } else {
            setPlayback(1);
        }
    }

    return (
        <div className="flex-auto w-full md:max-w-xl md:p-4 md:border-2 border-bright-red bg-silver dark:bg-charcoal">
            <CoverArt coverArt={track ? track.cover : 'placeholder.svg'} />
            <SongTitle songTitle={track ? track.title : 'Loading...'} artist={track ? track.artist : 'loading...'} />
            <PlayControls prev={props.prev} next={props.next} random={props.handleShuffling} handlePlayback={handlePlayback} handleVolume={handleVolume} handlePlaying={handlePlaying} playing={playing} playback={playback} />
            <VolumeControls handleVolume={handleVolume} volume={volume} />
            <AudioPlayer src={track ? track.song : 'loading...'} speed={playback} volume={volume} playing={playing} />
        </div>
    )
}