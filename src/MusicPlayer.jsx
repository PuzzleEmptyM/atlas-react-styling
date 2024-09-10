import React from 'react';
import CoverArt from './components/CoverArt';
import PlayControls from './components/PlayControls';
import PlayListItem from './components/PlayListItem';
import VolumeControl from './components/VolumeControl';

export default function MusicPlayer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <CoverArt />
      <PlayControls />
      <VolumeControl />
      <PlayListItem />
    </div>
  );
}
