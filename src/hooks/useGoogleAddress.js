import { useState, useEffect } from "react";
import axios from "axios";

//recibimos la direccion del user
const useGoogleAddress = (address) => {
  //guardamos el punto del address
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD41vdsiyASn3hDQYN-t4pjpessbcnXGXo`;

  //esperamos por la peticion que hacemos a la api
  useEffect(async () => {
    const response = await axios(API);
    //solo enviamos lo que necesitamos que es el location
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
