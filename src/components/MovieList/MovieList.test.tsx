import { render } from "@testing-library/react";
import { MovieList } from "./MovieList";
import { MovieListProps } from "./types";
import { mockMovies } from "../../tests/__tests__/mocks/mockMovies";

const defaultProps: MovieListProps = {
  translateX: 0,
  movies: mockMovies,
  focusIndex: 0,
};

describe("MovieList", () => {
  test("Should render MovieList component", () => {
    const { getByText } = render(<MovieList {...defaultProps} />);
    expect(getByText("El halcón inglés")).toBeInTheDocument();
    expect(getByText("Shame")).toBeInTheDocument();
  });

  test("Should render the correct number of movies", () => {
    const { getAllByRole } = render(<MovieList {...defaultProps} />);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(2);
  });

  test("Should apply the correct translateX style", () => {
    const { container } = render(
      <MovieList {...defaultProps} translateX={-100} />
    );
    const ul = container.querySelector("ul");
    expect(ul).toHaveStyle("transform: translateX(-100px)");
  });

  test("Should passes the correct props to MovieCard", () => {
    const { getByText } = render(<MovieList {...defaultProps} />);
    const movie1 = getByText("El halcón inglés");
    expect(movie1).toBeInTheDocument();

    const movie2 = getByText("Shame");
    expect(movie2).toBeInTheDocument();
  });
});
