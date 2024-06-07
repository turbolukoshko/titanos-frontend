import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { HorizontalListProps } from "./types";
import { cardBorderBox, previousCardWidth } from "../../consts/card-proportion";
import { MovieList } from "../MovieList/MovieList";
import "./HorizontalList.scss";

export const HorizontalList: FC<HorizontalListProps> = ({
  movies = [],
}): JSX.Element => {
  const [position, setPosition] = useState<{
    focusIndex: number;
    translateX: number;
  }>({
    focusIndex: 0,
    translateX: 0,
  });

  const { focusIndex } = position;

  const newTranslateX = useMemo(
    () => -(focusIndex * cardBorderBox - previousCardWidth),
    [focusIndex]
  );

  const pressKeyDown = useCallback(
    (e: KeyboardEvent) => {
      setPosition((prevState) => {
        const { focusIndex } = prevState;
        if (e.key === "ArrowRight") {
          return {
            ...prevState,
            focusIndex: focusIndex === movies.length - 1 ? 0 : focusIndex + 1,
          };
        } else if (e.key === "ArrowLeft") {
          return {
            ...prevState,
            focusIndex: focusIndex === 0 ? movies.length - 1 : focusIndex - 1,
          };
        }
        return prevState;
      });
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
    setPosition((prevState) => ({
      ...prevState,
      translateX: focusIndex === 0 ? 0 : newTranslateX,
    }));
  }, [focusIndex, newTranslateX]);

  return (
    <div
      className="horizontal-list-container"
      data-testid="horizontal-list-container"
    >
      <MovieList
        movies={movies}
        focusIndex={focusIndex}
        translateX={position.translateX}
      />
    </div>
  );
};
