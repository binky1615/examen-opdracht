import React from "react";
import reviewsData from '../reviewsData.js';
import { useNavigate } from "react-router-dom";

function Reviews() {
  const navigate = useNavigate();

  return (
    <section className="flex gap-5 h-screen justify-around mt-10">
      <div className="relative w-180 h-110">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={reviewsData[0].image}
          alt={reviewsData[0].title}
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg"
        onClick={() => navigate(`/Reviews/${reviewsData[0].id}`)}
        >
          "{reviewsData[0].title}" door {reviewsData[0].writer}
        </h1>
      </div>

      <section className="flex flex-col gap-5">
        {reviewsData.slice(1).map((review) => (
          <div key={review.id} className="relative w-90 h-60">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={review.image}
              alt={review.title}
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold rounded-lg"
            onClick={() => navigate(`/Reviews/${review.id}`)}

            >
              "{review.title}" door {review.writer}
            </h1>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Reviews;
