import React,{useEffect, useState} from 'react'
import './doctor-list.scss'
import axios from 'axios'

import DoctorsCard from './doctors-card'
const DoctorList = () => {
    const [doctors, setDoctor ] = useState([]);

    const fectDoctor = () =>{
        axios.get(`http://localhost:4040/api/doctor`)
        .then(response => {
            // console.log(response.data)
            setDoctor(response.data.doctors)
        })
        .catch(err => {
          console.log(err)
        })
    }

    useEffect(()=>{
        fectDoctor();
    },[]);

    return (
        <div className='doctor-container'>
            {doctors.map((doctor) => (
                <DoctorsCard key={doctor.id} doctor={doctor} />
            ))}
        </div>
    )
}

export default DoctorList
