import { Play, Pause, Shuffle, FastForward, Rewind } from "lucide-react";
import { useState } from "react";

export default function PlayControls() {
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
    return (
        <div className="flex justify-between">
            <button onClick={playbackSetter} className="flex justify-center items-center w-12 h-12 text-lg"><span className="text-charcoal dark:text-bright-red">{playback}</span></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Rewind /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red border-2 rounded border-charcoal dark:border-bright-red "><Play /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><FastForward /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Shuffle /></button>
        </div>
    )
}