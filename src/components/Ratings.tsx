import { Star, StarHalf } from "lucide-react";

const Ratings = ({
  rating = 0,
  maxRating = 5,
}: {
  rating: number;
  maxRating?: number;
}) => {
  const normalizedRating = Math.max(0, Math.min(rating, maxRating));
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  const getStartColor = (rating: number) => {
    if (rating <= 2) return "#ff444";
    if (rating <= 3.5) return "#ffa500";
    return "#10a37f";
  };

  const starColor = getStartColor(normalizedRating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {[...Array(fullStars)].map((_, index) => (
          <Star
            key={`full-${index}`}
            className="size-6 "
            fill={starColor}
            color={starColor}
          />
        ))}
        {hasHalfStar && (
          <StarHalf fill={starColor} color={starColor} className="size-6" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <Star
            key={`empty-${index}`}
            className="size-6"
            fill={"none"}
            color={"#d1d5db"}
          />
        ))}
      </div>
      <span className="text-md font-bold">
        {normalizedRating.toFixed(1)} out of {maxRating}
      </span>
    </div>
  );
};

export default Ratings;
