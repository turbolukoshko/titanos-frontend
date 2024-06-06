import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, StoreDispatch } from "../redux";
import { fetchMovieList } from "../redux/reducers/movieReducer";

export const useFetchMovies = () => {
  const dispatch: StoreDispatch = useDispatch();
  const moviesList = useSelector((state: RootState) => state.movies.items);
  const status = useSelector((state: RootState) => state.movies.status);
  const error = useSelector((state: RootState) => state.movies.error);
  const { collection } = moviesList || {};

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovieList());
    }
  }, [status, dispatch]);

  return { collection, status, error };
};
