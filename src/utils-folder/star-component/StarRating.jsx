import { useState } from "react";
import Star from "./Star";

const KEY = "98688fa9";

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  defaultRating = 0,
  size = "48px",
  className = "",
  message = [],
  textColor = "black",
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };
  const starContainer = {
    display: "flex",
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color: `${textColor}`,
  };

  const handleClick = (idx) => {
    setRating(idx + 1);
    onSetRating(idx + 1);
  };

  return (
    <div style={containerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => handleClick(i)}
            filled={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            hoverIn={() => setTempRating(i + 1)}
            hoverOut={() => setTempRating(0)}
            color={color}
            size={size}
            className={className}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxRating
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}
