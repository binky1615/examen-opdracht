import React from "react";
import reviewsData from '../reviewsData.js';

function Reviews() {
  return (
      <section className="flex gap-5 h-screen justify-around mt-10">
        <div className="relative w-180 h-110">
          <img className="w-full h-full object-cover rounded-lg" src={reviewsData[0].image} alt={reviewsData[0].title} />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg "> "{reviewsData[0].title}" door {reviewsData[0].writer}</h1>
        </div>

        <section className="flex flex-col gap-5">
        <div className="relative w-90 h-60">
          <img className="w-full h-full object-cover rounded-lg" src={reviewsData[1].image} alt={reviewsData[1].title} />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg "> "{reviewsData[1].title}" door {reviewsData[1].writer}</h1>
        </div>

        <div className="relative w-90 h-60">
          <img className="w-full h-full object-cover rounded-lg" src={reviewsData[2].image} alt={reviewsData[2].title} />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg "> "{reviewsData[2].title}" door {reviewsData[2].writer}</h1>
        </div>

        <div className="relative w-90 h-60">
          <img className="w-full h-full object-cover rounded-lg" src={reviewsData[3].image} alt={reviewsData[3].title} />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg "> "{reviewsData[3].title}" door {reviewsData[3].writer}</h1>
        </div>
        </section>
      </section>
  );
}

export default Reviews;

