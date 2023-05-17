import React,{useEffect, useState} from "react";
import "./list-appoint.scss";
import axios from "axios";
import CardAppoint from "./card-appoint";
import Button from '../../../shared/components/UIElement/Button/Button'
const ListAppointment = () => {
    const userId = "64607ec2979ae5f80c849d28";
    const [ appoint, setAppoint ] = useState([])

    const fecthAppoiont = () =>{
        axios.get(`http://localhost:4040/api/doctor/appointment/${userId}`)
        .then(response=>{
            setAppoint(response.data.appointment);
        })
        .catch(err => alert(err))
    }


    useEffect(()=>{
        fecthAppoiont()
    },[])

    return <div>
        <h2>การนัดหมาย</h2>
        <div className="list-appoint">

            <table className="header">
                <tr>
                    <td className="name">
                       ขื่อ
                    </td>
                    <td className="doctor">
                        แพทย์
                    </td>
                    <td className="expertise">
                       ความเขี่ยวชาญ
                    </td>
                    <td className="symptom">
                        อารการเบื้องต้น
                    </td>
                    <td className="date">
                        วันที่
                    </td>
                    <td className="time">
                        เวลา
                    </td>
                </tr>

            </table>

            
            { appoint.map(appoint => {
                return(      
                    <CardAppoint key={appoint.name} appoint={appoint} />

                )
            })}
 
        </div>
        <div className="button-center">
            <Button inverse>
                เลือกแพทย์
            </Button>
            <Button to='/appointment'>
                เพิ่มนัดหมาย
            </Button>
            </div>

    </div>
};

export default ListAppointment;
