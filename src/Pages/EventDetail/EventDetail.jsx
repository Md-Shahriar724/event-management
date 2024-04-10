
import { useParams } from "react-router-dom";



const EventDetail = () => {
 
    const {id, title, description} = useParams();
   

//    {
//     data.filter((id)=>{id == data.id})
//    }
    


    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200 w-[90vw] mx-auto my-10 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>

        <h2>{id}</h2>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{description}</p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EventDetail;