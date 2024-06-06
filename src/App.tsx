import { HorizontalList } from "./components/HorizontalList/HorizontalList";
import { Loader } from "./components/shared/Loader/Loader";
import { useFetchMovies } from "./hooks/useFetchMovies";
import "./App.css";

function App() {
  const { collection, status, error } = useFetchMovies();

  if (status === "loading") {
    return <Loader />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return <HorizontalList movies={collection} />;
}

export default App;
