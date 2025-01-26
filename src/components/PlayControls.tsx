import { Play, Pause, Shuffle, FastForward, Rewind } from "lucide-react";

export default function PlayControls(props: { prev: () => void, next: () => void, random: () => void, handlePlayback: () => void, handleVolume: (newVolume: number) => void, handlePlaying: () => void, playing: boolean, playback: number }) {

    return (
        <div className="flex justify-between">
            <button onClick={props.handlePlayback} className="flex justify-center items-center w-12 h-12 text-lg"><span className="text-charcoal dark:text-bright-red">{props.playback}X</span></button>
            <button onClick={props.prev} className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Rewind /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red border-2 rounded border-charcoal dark:border-bright-red " onClick={props.handlePlaying}>{props.playing ? <Pause /> : <Play />}</button>
            <button onClick={props.next} className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><FastForward /></button>
            <button onClick={props.random} className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Shuffle /></button>
        </div>
    )
}