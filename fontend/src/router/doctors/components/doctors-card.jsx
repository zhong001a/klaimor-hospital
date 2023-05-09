import React from 'react'
import Button from '../../../shared/components/UIElement/Button/Button'
import './doctors-card.scss'
const DoctorsCard = ({ doctor }) => {
    const { imageUrl, name, expertise }= doctor
    return (
        <div className='doctor-card-container'>
            <img src={`https://www.chiangmaiklaimor-hosp.com/${imageUrl}`} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className="expertise">{expertise}</span>
            </div>
            <Button>นัดหมาย</Button>
        </div>
  )
}

export default DoctorsCard
