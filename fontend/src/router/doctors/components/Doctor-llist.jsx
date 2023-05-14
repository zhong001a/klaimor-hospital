import React,{useEffect, useState} from 'react'
import './doctor-list.scss'
import axios from 'axios'
import Card from '../../../shared/components/UIElement/Card/Card'
import DoctorsCard from './doctors-card'

const DoctorList = () => {
    const [doctors, setDoctor ] = useState([]);

    const fectDoctor = () =>{
        axios.get(`http://localhost:4040/api/doctor`)
        .then(response => {
            console.log(response.data)
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
                <Card>
                    
                    <DoctorsCard key={doctor._id} doctor={doctor} />
                </Card>
            ))}
        </div>
    )
}

export default DoctorList
