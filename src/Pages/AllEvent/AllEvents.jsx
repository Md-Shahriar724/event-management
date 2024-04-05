import { useEffect, useState } from "react";
import AllEvent from "./AllEvent";


const AllEvents = () => {

    const [events, setEvents] = useState([])

    useEffect(()=>{
        fetch('allevent.json')
        .then(res => res.json())
        .then(data =>setEvents(data))
    },[])

    return (
        <div>
            <h1>All Events : {events.length}</h1>

            <div className="grid w-[90vw] mx-auto lg:grid-cols-3 md:grid-cols-2 justify-around lg:justify-around md:justify-around items-center">
                {
                    events.map((event)=><AllEvent key={event.id} event={event}></AllEvent>)
                }
            </div>
        </div>
    );
};

export default AllEvents;