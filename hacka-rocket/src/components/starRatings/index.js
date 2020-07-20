import React from "react";
import { Container } from "./styles";

const Ratings = ({
  reviews,
  rate = 3,
  starSize = "35px",
  starColor = "#FF6900",
  starColorDisabled = "#DEDFE0",
  starColorHover = "#f9de8d",
  onlyReading,
  onStarClick,
}) => {
  // eslint-disable-next-line no-shadow
  const rateStars = (onlyReading) => {
    const stars = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <>
          <input
            type="radio"
            id={`star-${6 - i}`}
            name="ratings"
            value={6 - i}
            disabled={onlyReading}
          />
          <label
            role="presentation"
            onClick={() => (onlyReading ? {} : onStarClick(6 - i))}
            htmlFor={`star-${6 - i}`}
          >
            ★
          </label>
        </>
      );
    }
    return stars;
  };
  return (
    <Container
      starColor={starColor}
      starColorDisabled={starColorDisabled}
      onlyReading={onlyReading}
      starColorHover={starColorHover}
      starSize={starSize}
    >
      <div className="stars-wrapper">
        <div className="star-ratings-css">
          {onlyReading && (
            <div
              className="star-ratings-css-top"
              style={{ width: `${rate * 20}%` }}
            >
              <label>★</label>
              <label>★</label>
              <label>★</label>
              <label>★</label>
              <label>★</label>
            </div>
          )}
          <div className="rating star-ratings-css-bottom">
            {rateStars(onlyReading)}
          </div>
        </div>
      </div>

      {!!reviews && reviews > 0 && (
        <span className="stars-wrapper__rating-count">({reviews})</span>
      )}
    </Container>
  );
};

export default Ratings;
