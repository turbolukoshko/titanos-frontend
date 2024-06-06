import { FC } from "react";
import "./MovieCard.scss";
import { MovieCardProps } from "./types";

export const MovieCard: FC<MovieCardProps> = ({
  index,
  focusIndex,
  id,
  imageSrc,
  title,
}): JSX.Element => {
  return (
    <li
      key={id}
      className={`horizontal-list__card ${
        index === focusIndex ? "focused" : ""
      }`}
      data-testid="movie-list-item"
    >
      <div className="horizontal-list__card-image-container">
        <img
          src={imageSrc}
          alt={title}
          className="horizontal-list__card-image"
        />
      </div>
      <p className="horizontal-list__card-title">{title}</p>
    </li>
  );
};
