import { HorizontalList } from "./components/HorizontalList/HorizontalList";
import { Loader } from "./components/shared/Loader/Loader";
import { useFetchMovies } from "./hooks/useFetchMovies";
import "./App.css";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";

function App() {
  const { collection, status, error } = useFetchMovies();

  if (status === "loading") {
    return <Loader />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <ErrorBoundary>
      <HorizontalList movies={collection} />
    </ErrorBoundary>
  );
}

export default App;
