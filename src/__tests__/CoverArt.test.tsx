import CoverArt from "../components/CoverArt";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";

test('CoverArt snapshot', () => {
    const { container } = render(<CoverArt coverArt="placeholder.svg" />);
    expect(container).toMatchSnapshot();
});