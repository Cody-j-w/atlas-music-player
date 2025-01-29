import PlayListItem from "../components/PlayListItem";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";

test('SongTitle snapshot', () => {
    const testSet = (currentTrack: string) => {
        return;
    }

    const { container } = render(<PlayListItem songTitle="test One" artist="The Tests" songId="1234" currentTrack="1234" setCurrentTrack={testSet} duration={194} />);
    expect(container).toMatchSnapshot();
});