import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from './playlist';

test('adds a new track when Add button is clicked', () => {
  render(<Playlist playlistName="My Test Playlist" />);
  
  const button = screen.getByText(/Add Track/i);
  fireEvent.click(button);

  const newTrack = screen.getByText(/New Track, New Artist, New Album/i);
  expect(newTrack).toBeInTheDocument();
});