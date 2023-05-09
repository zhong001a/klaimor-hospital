import React,{useEffect, useState} from 'react'
import './doctor-list.scss'
import axios from 'axios'


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
            
        <div >
            <label htmlFor="select" className='label'>ศูนย์รักษา</label>

            <select name="" id="" className='option'>

                <option className='option' key="1" value="ทั้งหมด" >ทั้งหมด</option>
                {doctors.map(doctor => {

                    return(
                        <option className='option' key={doctor} >{doctor}</option>
                   )
                })}
            </select> 
        </div>
    )
}

export default DoctorList
