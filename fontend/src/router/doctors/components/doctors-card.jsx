import React from 'react'
import Button from '../../../shared/components/UIElement/Button/Button'
import './doctors-card.scss'
const DoctorsCard = ({ doctor }) => {
    const { _id, imageUrl, name, expertise}= doctor
    return (

        <div className='doctor-card-container'>
            <img src={`https://www.chiangmaiklaimor-hosp.com/${imageUrl}`} alt={name} />
            
            <div className='footer'>
                <span className='name'>{name}</span>
            </div>

            <div>
                <span className="expertise">{expertise}</span>
            </div>

            <div className='button-container'>
               
                <Button className="button" to={`doctor/appointment/${_id}`} >นัดหมาย</Button>
            </div>
        </div>
  )
}

export default DoctorsCard
