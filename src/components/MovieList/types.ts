import { Movie } from "../../redux/types";

export type MovieListProps = {
  movies: Movie[];
  translateX: number;
  focusIndex: number;
};
