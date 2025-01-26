import { useEffect, useRef } from "react"
export default function AudioPlayer(props: { src: string, volume: number, speed: number, playing: boolean }) {

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const handleAudio = () => {
        if (audioRef.current) {
            if (props.playing) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }
    useEffect(() => {
        if (audioRef.current) {
            handleAudio()
        }
    })

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = props.speed;
            audioRef.current.volume = (props.volume / 100);
        }
    }, [props.volume])

    return (
        <audio ref={audioRef} src={props.src} hidden />
    )
}