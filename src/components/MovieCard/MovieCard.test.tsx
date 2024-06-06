import { render } from "@testing-library/react";
import { MovieCard } from "./MovieCard";

const mockMovie = {
  index: 0,
  focusIndex: 0,
  id: 1,
  imageSrc:
    "https://d998oz1ebgwp7.cloudfront.net:443/img/wx2rihpml2v3cfqz90j8j13g9aea",
  title: "El halcón inglés",
};

describe("MovieCard component", () => {
  it("Should render MovieCard component", () => {
    const { getByAltText, getByText } = render(<MovieCard {...mockMovie} />);

    expect(getByAltText("El halcón inglés")).toBeInTheDocument();
    expect(getByText("El halcón inglés")).toBeInTheDocument();
  });

  it("Should add 'focused' class when index matches focusIndex", () => {
    const { container } = render(<MovieCard {...mockMovie} />);
    const movieCard = container.querySelector(".horizontal-list__card");

    expect(movieCard).toHaveClass("focused");
  });

  it("Should not add 'focused' class when index does not match focusIndex", () => {
    const { container } = render(<MovieCard {...mockMovie} focusIndex={2} />);
    const movieCard = container.querySelector(".horizontal-list__card");

    expect(movieCard).not.toHaveClass("focused");
  });
});
