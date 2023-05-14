import React from 'react'
import './doctor-card.scss'
const DoctorCard = ({ doctor }) => {
    const { imageUrl, name, expertise } = doctor;
    const image = `https://www.chiangmaiklaimor-hosp.com/${imageUrl}`
    return (
        <div className='doctor-card-container'>
            <div className='doctor-card-image'>
                <img className='img' src={image} alt={name} />
            </div>
            <div className='doctor-card-name'>
                <h2>{name}</h2>
            </div>
            <div className='doctor-card-expertise'>
                <h3>{expertise}</h3>
            </div>
            
        </div>
    )
}

export default DoctorCard
