import VolumeControls from "../components/VolumeControls";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";

test('VolumeControls snapshot', () => {
    const handleVolume = () => {
        return;
    }
    const { container } = render(<VolumeControls handleVolume={handleVolume} volume={50} />);
    expect(container).toMatchSnapshot();
});