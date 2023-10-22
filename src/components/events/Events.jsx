

//import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";
import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";
import table from "../../../_data/db.json"

// Json-server
//const getEvents = async () => {
  //const res = await fetch('http://localhost:4000/events');
  //return res.json();
//}

const Events = async () => {

  //Supabase
  //const [events, setEvents] = useState([])

  //useEffect(() =>  {
    //getEvents();
  //},[]);
  
  // async function getEvents(){
  //   try {
  
  //     const { data, error } = await supabase
  //       .from('events')
  //       .select('*')
  
  //     if(error) throw error;
  
  //     if(data != null){
  //       setEvents(data)  // Habría que situar events en <EventsBox />
  //     }
  
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle={'World Tour'} title={'Upcoming Events'}/>
        {/* event box */}
        <EventBox events={table.events}/>
      </div>
    </section>
  )
}

export default Events