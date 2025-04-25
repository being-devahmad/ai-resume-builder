import PaddingContainer from "@/components/PaddingContainer";
import Heading from "./Heading";

const Reviews = () => {
  return (
    <div>
      <PaddingContainer className="py-10 md:py-20">
        <div className="text-center">
          <Heading>Reviews</Heading>
          <p className="text-secondary-text">
            Look what our users say about us
          </p>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Reviews;
