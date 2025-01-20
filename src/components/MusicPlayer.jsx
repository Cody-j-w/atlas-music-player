import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";
export default function MusicPlayer() {
  return (
    <>
      <CoverArt coverArt='placeholder.svg' />
      <SongTitle songTitle='Placeholder' artist='The Placeholders' />
      <PlayControls />
      <VolumeControls />
      <PlayListItem songTitle='Placeholder' artist='The Placeholders' songLength='8:47' />
    </>
  );
}
