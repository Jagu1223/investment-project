import React from "react";

import ReviewSlider from "./ReviewSlider";
import SectionHeading from "../../Helper/SectionHeading";

const Review = () => {
  return (
    <div className="pt-20 pb-16 bg-[#6a15e1]">
      {/* Section Heading */}

      <SectionHeading heading="Client Review" />

      {/* Review Slider div*/}

      <div className="w-4/5 mt-16 mx-auto ">
        {/* review slider component */}
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Review;
