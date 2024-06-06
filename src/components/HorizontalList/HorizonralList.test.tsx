import { render, fireEvent } from "@testing-library/react";
import { HorizontalList } from "./HorizontalList";
import { mockMovies } from "../../tests/__tests__/mocks/mockMovies";

describe("HorizontalList component", () => {
  it("Should render HorizontalList component with movies", () => {
    const { getByTestId, getAllByTestId } = render(
      <HorizontalList movies={mockMovies} />
    );

    const horizontalListContainer = getByTestId("horizontal-list-container");
    const movieItems = getAllByTestId("movie-list-item");

    expect(horizontalListContainer).toBeInTheDocument();
    expect(movieItems).toHaveLength(mockMovies.length);
  });

  it("Should move focusIndex to next movie when ArrowRight key is pressed", () => {
    const { getAllByTestId } = render(<HorizontalList movies={mockMovies} />);

    fireEvent.keyDown(window, { key: "ArrowRight" });

    const movieItems = getAllByTestId("movie-list-item");
    const focusedMovie = movieItems.find((item) =>
      item.classList.contains("focused")
    );
    expect(focusedMovie).toHaveTextContent("Shame");
  });

  it("Should move focusIndex to previous movie when ArrowLeft key is pressed", () => {
    const { getAllByTestId } = render(<HorizontalList movies={mockMovies} />);

    fireEvent.keyDown(window, { key: "ArrowLeft" });

    const movieItems = getAllByTestId("movie-list-item");
    const focusedMovie = movieItems.find((item) =>
      item.classList.contains("focused")
    );
    expect(focusedMovie).toHaveTextContent("Shame");
  });
});
