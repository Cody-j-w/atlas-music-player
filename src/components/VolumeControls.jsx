import { Volume2 } from "lucide-react"
export default function VolumeControls(props) {
    return (
        <div className="flex dark:text-bright-red text-charcoal">
            <Volume2 />
            <input className="w-full accent-bright-red" type="range" min="0" max="100" />
        </div>
    )
}