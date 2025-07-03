import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import reviewsData from '../reviewsData.js';

const ReviewsDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const reviews = reviewsData.find((revw) => revw.id === Number(id));

    if (!reviews) {
        return <h2>what the sigma</h2>
    }


    return (
        <section className="min-h-screen flex flex-row gap-8 justify-center items-center text-center p-8 text-gray-400 ">
            <section >
                <div className="flex flex-col justify-center items-center gap-4 mb-4" >
                    <h1 className='text-3xl pb-4'>{reviews.title}</h1>
                    <img src={reviews.image} alt="" className='size-1/2 border-2 border-gray-400 rounded-lg'/>
                    <p className="w-1/2 border-2 border-gray-400 rounded-lg p-2" >{reviews.text}</p>
                    <div className='flex flex-row justify-center items-center gap-2 scale-125'>
                        <p className="" >{reviews.writer}</p>
                        <p className="" >{reviews.rating}</p>
                    </div>
                </div> 
                <div className="flex justify-center items-center gap-3">

                <button className="bg-blue-900 rounded-lg p-2 text-white hover:bg-blue-950 transition pl-6 pr-6"
                onClick={() => navigate(-1)} >Back</button>
                </div>
            </section>
        </section>
    );
}
export default ReviewsDetailPage;