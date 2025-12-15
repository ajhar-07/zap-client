import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import axios from 'axios';
const Coverage = () => {
    const position = [23.6850, 90.3563];
    const [Maplocation,setMaplocation]=useState([])
    const mapRef=useRef()
    const handlelocation=(e)=>{
        e.preventDefault()
        const searchlocation=e.target.searchlocation.value
        const district=Maplocation.find(location=>location?.district?.toLowerCase().includes(searchlocation?.toLowerCase()))
        console.log(district);
      if(district){
        const coord=[district.latitude,district.longitude]
      console.log(coord);
      mapRef.current.flyTo(coord,14)
      

      }
    }
    useEffect(()=>{
        axios.get('/servicecenter.json')
        .then(data=>setMaplocation(data.data))
    },[])

    console.log(Maplocation);
    
    return (
        <div>
         <h3 className='font-bold text-3xl'>Find Your Destination</h3> 
         {/* search  */}
      <form onSubmit={handlelocation}>
           <div className='mt-5'>
            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" name='searchlocation' />
</label>
         </div>
      </form>

{/* -------------------- */}
         <div className='border h-[800px] my-10 rounded-3xl'>
          <MapContainer ref={mapRef} className='h-[800px] rounded-3xl' center={position} zoom={8} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
        Maplocation.map((location,i)=><Marker key={i} position={[location.latitude,location.longitude]}>
      <Popup>
       <b>{location.district}</b> <br /> {location.covered_area.join(',')}
      </Popup>
    </Marker>)
    }
  </MapContainer>,
         </div>

        </div>
    );
};

export default Coverage;