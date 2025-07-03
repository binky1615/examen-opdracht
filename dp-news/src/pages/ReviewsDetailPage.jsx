import { useNavigate, useParams } from 'react-router-dom'
import reviewsData from '../reviewsData.js';

const ReviewsDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const reviews = reviewsData.find((proc) => proc.id === Number(id));

    if (!reviews) {
        return <h2>what the sigma</h2>
    }


    return (
        <section className="min-h-screen flex flex-row gap-8 justify-center items-center text-center p-8 text-purple-600 ">
            <section >
                <div className="flex flex-col justify-center items-center gap-4 mb-4" >
                    <h1 className='text-6xl pb-4'>{reviews.name}</h1>
                    <img src={reviews.image} alt="" className='size-1/2 m-auto'/>  
                    <p className="w-80" >{reviews.description}</p>
                </div>
                
                <div className="flex justify-center items-center gap-3">
                <a className="bg-purple-600 rounded-lg p-2 text-white hover:bg-purple-700 transition" href={reviews.URL} target="_blank">link naar github code</a>
                <button className="bg-purple-600 rounded-lg p-2 text-white hover:bg-purple-700 transition"
                onClick={() => navigate(-1)} >Back</button>
                </div>
            </section>
        </section>
    );
}
export default ReviewsDetailPage;