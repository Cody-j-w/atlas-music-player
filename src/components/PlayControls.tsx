import { Play, Pause, Shuffle, FastForward, Rewind } from "lucide-react";
import { useState } from "react";

export default function PlayControls(props: { prev: () => void, next: () => void, random: () => void }) {
    const [playback, setPlayback] = useState(1);
    const playbackSetter = () => {
        if (playback === 1) {
            setPlayback(2);
        } else if (playback === 2) {
            setPlayback(0.5);
        } else {
            setPlayback(1);
        }
    }

    const [pause, setPause] = useState(false);

    const playPause = () => {
        if (pause == false) {
            setPause(true);
        } else {
            setPause(false);
        }
    }
    return (
        <div className="flex justify-between">
            <button onClick={playbackSetter} className="flex justify-center items-center w-12 h-12 text-lg"><span className="text-charcoal dark:text-bright-red">{playback}X</span></button>
            <button onClick={props.prev} className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Rewind /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red border-2 rounded border-charcoal dark:border-bright-red " onClick={playPause}>{pause ? <Pause /> : <Play />}</button>
            <button onClick={props.next} className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><FastForward /></button>
            <button onClick={props.random} className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Shuffle /></button>
        </div>
    )
}