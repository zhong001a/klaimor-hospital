import React,{useEffect, useState} from 'react'

import Input from '../../../shared/components/Formcomponent/Input';
import Button from '../../../shared/components/UIElement/Button/Button';
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
import { useForm } from '../../../shared/hook/form-hook';
import  './doctor-appoitment.scss'
import Modal from '../../../shared/components/UIElement/Modal/Modal';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DoctorCard from './doctor-card';
import TIME from './TIME.json'


const DoctorAppointment = () => {
    const [openModal, setOpenModal] = useState(false);
    const [doctor, setdoctor] = useState({})
    const time = TIME.time;
    const [ aptTime, setTime ] = useState("00.00");
    
    

    const openModalHandler =() =>{
      setOpenModal(true)
    }
    const closeModalHandler =() =>{
      setOpenModal(false)
    }

    const doctorId = useParams().did;
    
    const fecthDoctor = async () =>{
        await axios.get(`http://localhost:4040/api/doctor/${doctorId}`)
        .then(response =>{
         
          setdoctor(response.data.doctor)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    useEffect(()=>{
      fecthDoctor()
    }, [])

    
    const [formState, inputHandler] = useForm(
        {
          date: {
            value: '',
            isValid: false
          },
          symptom: {
            value: '',
            isValid: false
          }
        },
        false
      );
      const setTimeValue = event =>{
        setTime(event.target.value);
      }

      let userId = "645dd3d07388c701c3fb97c1";
      const onSubmitHandler = async event =>{
        event.preventDefault();
        const date = formState.inputs.date.value;
        const symptom = formState.inputs.symptom.value;

        console.log(date,aptTime,symptom, doctorId, userId);
      }

    return (
        <React.Fragment>
            <div className='da-container'>
                <div className='doctor-detail'>
                  <DoctorCard doctor={ doctor } />
                </div>
                <div className='user-detail'>
                    <form onSubmit={onSubmitHandler}>
                        <Input
                            element="input"
                            id="date"
                            type="date"
                            label="วันที่"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid name and lastname."
                            onInput={inputHandler}
                        />
        
                        <div className='expertise'>
                            <label className='label'>เวลา</label>
                            <select name="" id="" className='option' onChange={setTimeValue} >
                                
                                {time.map(time => {
                                return(
                                    <option value={time} key={time} className='option'>{time}</option>
                                )
                                })}


                            </select>
                        </div>

                        <Input
                            element="textarea"
                            id="symptom"
                            type="text"
                            label="อาการเบื้องต้น"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a Initial Symptoms"
                            onInput={inputHandler}
                        />

                        <div className='button-container'>
                          <Button inverse to='/doctor'>
                              ยกเลิก
                          </Button>

                          <Button  type="submit"  disabled={!formState.isValid} >
                              สร้างนัดหมาย
                          </Button>
                        </div>

                        <Modal 
                        show={openModal}
                        onCancel={closeModalHandler}
                        header="Are you sure ? "
                        footerClass='place-item__modal-actions'
                        footer={
                            <React.Fragment>
                            </React.Fragment>
                        }
                        >
                        <h2>ทำการนัดหมายเรียบร้อย</h2>
                        </Modal>

                    </form>
                </div>
            </div>
        </React.Fragment>

  );

};



export default DoctorAppointment
