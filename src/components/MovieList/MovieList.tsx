import { FC } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieListProps } from "./types";
import "./MovieList.scss";

export const MovieList: FC<MovieListProps> = ({
  translateX,
  movies,
  focusIndex,
}): JSX.Element => {
  return (
    <ul
      className="horizontal-list"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      {movies.map((movie, index) => {
        const {
          id,
          title,
          images: { artwork_portrait },
        } = movie;
        return (
          <MovieCard
            key={id}
            index={index}
            id={id}
            title={title}
            imageSrc={artwork_portrait}
            focusIndex={focusIndex}
          />
        );
      })}
    </ul>
  );
};
