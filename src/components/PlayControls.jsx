import { Play, Pause, Shuffle, FastForward, Rewind } from "lucide-react";

export default function PlayControls(props) {
    return (
        <div className="flex justify-between">
            <button className="flex justify-center items-center w-12 h-12 text-lg"><span className="text-charcoal dark:text-white">1x</span></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Rewind /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red border-2 rounded border-charcoal dark:border-bright-red "><Play /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><FastForward /></button>
            <button className="flex justify-center items-center w-12 h-12 text-charcoal dark:text-bright-red "><Shuffle /></button>
        </div>
    )
}