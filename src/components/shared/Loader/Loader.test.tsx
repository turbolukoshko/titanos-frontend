import { render } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader component", () => {
  it("Loader component should be in the document", () => {
    const { container } = render(<Loader />);
    expect(container).toBeInTheDocument();
  });

  it("Should contains an SVG element", () => {
    const { container } = render(<Loader />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("SVG has correct attributes", () => {
    const { container } = render(<Loader />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 100 100");
    expect(svg).toHaveAttribute("preserveAspectRatio", "xMidYMid");
    expect(svg).toHaveAttribute("width", "50");
    expect(svg).toHaveAttribute("height", "50");
  });
});
