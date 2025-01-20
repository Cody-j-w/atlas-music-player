import { Play, Pause, Shuffle, FastForward, Rewind } from "lucide-react";

export default function PlayControls(props) {
    return (
        <div className="flex justify-between">
            <button><Rewind fill="black" /></button>
            <button><Play fill="black" /></button>
            <button><FastForward fill="black" /></button>
            <button><Shuffle fill="black" /></button>
        </div>
    )
}