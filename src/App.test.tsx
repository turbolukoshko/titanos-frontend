import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { useFetchMovies } from "./hooks/useFetchMovies";
import { mockMovies } from "./tests/__tests__/mocks/mockMovies";

jest.mock("./hooks/useFetchMovies");

describe("App Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should render Loader when status is loading", async () => {
    (useFetchMovies as jest.Mock).mockReturnValue({
      collection: null,
      status: "loading",
      error: null,
    });

    const { getByTestId } = render(<App />);

    expect(getByTestId("loader")).toBeInTheDocument();
  });

  test("Sgould render error message when there is an error", async () => {
    const errorMessage = "Failed to fetch data";
    (useFetchMovies as jest.Mock).mockReturnValue({
      collection: null,
      status: "failed",
      error: errorMessage,
    });

    const { getByText } = render(<App />);

    expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  test("Should render HorizontalList when data is loaded", async () => {
    const movies = mockMovies;
    (useFetchMovies as jest.Mock).mockReturnValue({
      collection: movies,
      status: "succeeded",
      error: null,
    });

    const { getByTestId, getByText } = render(<App />);

    await waitFor(() => {
      expect(getByTestId("horizontal-list-container")).toBeInTheDocument();
    });

    movies.forEach((movie) => {
      expect(getByText(movie.title)).toBeInTheDocument();
    });
  });
});
