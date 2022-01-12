import react, { useEffect, useState } from "react";

export const LocationList = ()=> {
    const [locations, getLocations] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8088/locations`).then((locs)=>{
            return locs.json()
        }).then((locObjs)=>{
            return getLocations(locObjs)
        })
    },[])


    return (
        <>
        <h2>Locations</h2>

        {
            locations.map((location)=> {
              return  <p key={`location--${location.id}`}>{location.address}</p>
            })
        }
        
        </>
    )
}