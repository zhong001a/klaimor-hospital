import React from "react";
import ListAppointment from "./components/list-appoint";
import './Appointment.scss'
import Card from '../../shared/components/UIElement/Card/Card'
const UserAppointment = () => {
    return (
        <div className='main-list-container'>
            <Card className='main-list-container'>
                <ListAppointment/>
            </Card>
        </div>
       
    )
};

export default UserAppointment;
