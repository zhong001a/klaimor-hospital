import React from 'react'
import './appointment-doctor.scss'
import Card from '../../../shared/components/UIElement/Card/Card'

import DoctorAppointment from '../components/doctor-appoitment'
const AppoitmentDoctor = () => {
  return (
      <center>
        <div className='container-appointment'> 
            <Card className="appoint-card" >
              <DoctorAppointment/>
            </Card>
        </div>
      </center>



  )
}

export default AppoitmentDoctor
