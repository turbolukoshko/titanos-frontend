import { FC, useCallback, useEffect, useState } from "react";
import { HorizontalListProps } from "./types";
import { cardBorderBox, previousCardWidth } from "../../consts/card-proportion";
import { MovieList } from "../MovieList/MovieList";
import "./HorizontalList.scss";

export const HorizontalList: FC<HorizontalListProps> = ({
  movies = [],
}): JSX.Element => {
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const newTranslateX = -(focusIndex * cardBorderBox - previousCardWidth);
  const isFirstLoad = focusIndex === 0;

  const pressKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setFocusIndex((prevIndex) =>
          prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowLeft") {
        setFocusIndex((prevIndex) =>
          prevIndex === 0 ? movies.length - 1 : prevIndex - 1
        );
      }
    },
    [movies.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", pressKeyDown);
    return () => {
      window.removeEventListener("keydown", pressKeyDown);
    };
  }, [pressKeyDown]);

  useEffect(() => {
    setTranslateX(isFirstLoad ? 0 : newTranslateX);
  }, [focusIndex, isFirstLoad, newTranslateX]);

  return (
    <div
      className="horizontal-list-container"
      data-testid="horizontal-list-container"
    >
      <MovieList
        movies={movies}
        focusIndex={focusIndex}
        translateX={translateX}
      />
    </div>
  );
};
