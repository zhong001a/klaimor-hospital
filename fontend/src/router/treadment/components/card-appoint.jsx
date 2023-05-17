import React from 'react'

import './card-appoint.scss'

const CardAppoint = ({appoint}) => {
    
    const { name, expertise, symptom, doctorId, date, time } = appoint;
    return (
        <div className='card-appoint'>
            
            <table>
                <tr>
                    <td className="name">
                        {name}
                    </td>
                    <td className="doctor">
                        {doctorId.map(doctor => (doctor.name ))}
                    </td>
                    <td className="expertise">
                        {expertise}
                    </td>
                    <td className="symptom">
                        {symptom}
                    </td>
                    <td className="date">
                        {date}
                    </td>
                    <td className="time">
                        {time}
                    </td>

                </tr>
            </table>

          

        </div>
    )
}

export default CardAppoint
