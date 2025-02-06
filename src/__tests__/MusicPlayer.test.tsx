import { afterAll, afterEach, beforeAll, test, expect, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { server } from "./mock";
import MusicPlayer from '../components/MusicPlayer';

// Start server before all tests run
beforeAll(() => {
    Object.defineProperty(global.HTMLAudioElement, 'pause', { value: vi.fn(), configurable: true, writable: true })
    server.listen();
});

// Reset between tests to gaurantee test always start in the same state
afterEach(() => {
    server.resetHandlers();
});

// Shutdown at the end of tests
afterAll(() => {
    server.close();
});

test("Test that Music Player renders properly with first song in list set to current song", async () => {
    render(<MusicPlayer />);
    await waitFor(() => {
        expect(screen.getByRole('heading')).toHaveTextContent("test 1");
    });
});

test("Test that clicking next song changes the playing song", async () => {
    render(<MusicPlayer />);
    const nextSong = await screen.findByLabelText("next song");
    fireEvent.click(nextSong);
    await waitFor(() => {
        expect(screen.getByRole('heading')).toHaveTextContent("test 2");
    })
})

test("Test that clicking previous song changes the playing song", async () => {
    render(<MusicPlayer />);
    const nextSong = await screen.findByLabelText("next song");
    fireEvent.click(nextSong);
    const previousSong = await screen.findByLabelText("previous song");
    fireEvent.click(previousSong);
    await waitFor(() => {
        expect(screen.getByRole('heading')).toHaveTextContent("test 1");
    })
})

test("Test that selecting a song from the playlist changes the currently playing song", async () => {
    render(<MusicPlayer />);
    const playlistItem = await screen.findByText("test 3");
    fireEvent.click(playlistItem);

    await waitFor(() => {
        expect(screen.getByRole('heading')).toHaveTextContent("test 3");
    })
})

test("Test that pause and play toggle correctly", async () => {
    render(<MusicPlayer />);
    const playPause = await screen.findByLabelText("play");

    fireEvent.click(playPause);

    await waitFor(() => {
        expect(screen.getByLabelText('pause')).toBeInTheDocument();
    });

    fireEvent.click(playPause);

    await waitFor(() => {
        expect(screen.getByLabelText('play')).toBeInTheDocument();
    })
})