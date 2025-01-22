import CurrentlyPlaying from "./CurrentlyPlaying";
import PlayList from "./PlayList";
export default function MusicPlayer() {
  const placeHolderPlayList = [
    {
      songTitle: 'Placeholder',
      artist: 'The Placeholders',
      songLength: '8:47'
    },
    {
      songTitle: 'Placeholder',
      artist: 'The Placeholders',
      songLength: '8:47'
    },
    {
      songTitle: 'Placeholder',
      artist: 'The Placeholders',
      songLength: '8:47'
    },
    {
      songTitle: 'Placeholder',
      artist: 'The Placeholders',
      songLength: '8:47'
    }
  ];
  return (
    <div className="flex flex-wrap md:container md:mx-auto justify-center">
      <CurrentlyPlaying coverArt="placeholder.svg" songTitle="Placeholder" artist="The Placeholders" />
      <PlayList playList={placeHolderPlayList} />
    </div>
  );
}
