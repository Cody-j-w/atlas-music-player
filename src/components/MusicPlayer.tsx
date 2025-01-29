import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import PlayList from "./PlayList";
export default function MusicPlayer() {

  type playlistTrack = {
    id: string,
    title: string,
    artist: string,
    genre: string,
    duration: number
  }
  const [playlist, setPlaylist] = useState<playlistTrack[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [shuffling, setShuffling] = useState<boolean>(false);

  const nextTrack = () => {
    if (shuffling) {
      const randIdx = Math.floor(Math.random() * playlist.length);
      setIndex(randIdx);
      setCurrentTrack(playlist[(randIdx % playlist.length)].id)
    } else {
      setIndex(index + 1);
      setCurrentTrack(playlist[(index + 1) % playlist.length].id)
    }
  }

  const prevTrack = () => {
    if (shuffling) {
      const randIdx = Math.floor(Math.random() * playlist.length)
      setIndex(randIdx);
      setCurrentTrack(playlist[(randIdx % playlist.length)].id)
    } else {
      setIndex(index - 1);
      setCurrentTrack(playlist[(index - 1) % playlist.length].id)
    }
  }

  const handleShuffling = () => {
    if (shuffling) {
      setShuffling(false);
    } else {
      setShuffling(true);
    }
  }

  const randomTrack = () => {
    const randomIndex = Math.floor(Math.random() * playlist.length)
    setIndex(randomIndex);
    setCurrentTrack(playlist[randomIndex].id);
  }

  const getData = () => {
    fetch('http://localhost:5173/api/v1/playlist',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then((res) => res.json())
      .then((data) => {
        setPlaylist(data)
        setCurrentTrack(data[0].id)
      })
  }
  useEffect(() => {
    getData();

  }, []);
  return (
    <div className="flex flex-wrap md:container md:mx-auto justify-center">
      <CurrentlyPlaying currentTrack={currentTrack} next={nextTrack} prev={prevTrack} random={randomTrack} handleShuffling={handleShuffling} />
      <PlayList playList={playlist} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
    </div>
  );
}
