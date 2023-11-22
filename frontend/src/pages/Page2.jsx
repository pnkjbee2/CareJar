import { useEffect, useState} from "react"
import { Stack } from '@mui/material'
import DoctorCard from "../components/DoctorCard";
import { useParams } from "react-router-dom";



const Page2 =()=> {
    const[doctor,setDoctor] = useState([]);
    const {type} = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/:${type}`); // Replace with your server endpoint
            const data = await response.json();
            console.log(data);
            setDoctor(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [type]);

     return(
        <div>
            
           <Stack>
                {
                     doctor.map((doctorDetails, index) => (
                       <DoctorCard key={index} doctor={doctorDetails} /> 
                       
                        
                     ))
                 }
             </Stack>
            
         </div>
     )  
}

export default Page2;