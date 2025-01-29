import SongTitle from "../components/SongTitle";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";

test('SongTitle snapshot', () => {
    const { container } = render(<SongTitle songTitle="test One" artist="The Tests" />);
    expect(container).toMatchSnapshot();
});