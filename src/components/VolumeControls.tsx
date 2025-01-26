import { Volume2 } from "lucide-react"
import { ChangeEvent } from "react"
export default function VolumeControls(props: { handleVolume: (newVolume: number) => void, volume: number }) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.handleVolume(parseInt(event.target.value))
    }

    return (
        <div className="flex dark:text-bright-red text-charcoal">
            <Volume2 />
            <input onChange={handleChange} className="w-full accent-bright-red" type="range" min="0" max="100" value={props.volume} />
        </div>
    )
}