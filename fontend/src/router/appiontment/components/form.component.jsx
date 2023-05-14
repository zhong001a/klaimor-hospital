import React,{useEffect, useState} from 'react'

import Input from '../../../shared/components/Formcomponent/Input';
import Button from '../../../shared/components/UIElement/Button/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../../shared/util/validators';
import { useForm } from '../../../shared/hook/form-hook';
import  './form.style.scss'
import Modal from '../../../shared/components/UIElement/Modal/Modal';
import axios from 'axios';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const FormAppointment = () => {

    const [doctors, setDoctor ] = useState([]);
    const [expertise, setExpertise ] = useState("")
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler =() =>{
      setOpenModal(true)
    }
    const closeModalHandler =() =>{
      setOpenModal(false)
    }


    const fectDoctor = () =>{
      axios.get(`http://localhost:4040/api/doctor/expertise`)
      .then(response => {
          setDoctor(response.data.doctors)

          
      })

      .catch(err => {
        console.log(err)
      })
    }

    useEffect(()=>{
        fectDoctor();
    },[]);

    const [formState, inputHandler] = useForm(
        {
          name: {
            value: '',
            isValid: false
          },
          email: {
            value: '',
            isValid: false
          },
          phone: {
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

      const setValue = event =>{
        setExpertise(event.target.value);
        console.log(expertise)
      }

      if(!expertise){
        setExpertise("ความเชี่ยวชาญเวชปฏิบัติทั่วไป")
      }

      // const userId = useParams().uid;
      const userId = "645b71bd7b23191c26d0e087"
      const onSubmitHandler = async event =>{
        const name = formState.inputs.name.value;
        const email = formState.inputs.email.value;
        const phone = formState.inputs.phone.value;
        const symptom = formState.inputs.symptom.value;
        event.preventDefault();
        console.log(userId)
        axios.post(`http://localhost:4040/api/doctor/create/appoint`,{name, phone, email, symptom, expertise, userId})
        .then(response => {
            
            if(response.status === 201){
              console.log(response.data)
              openModalHandler()

            }
          }
        )
        .catch(err =>{
          console.log(err)
     
        })
        // console.log(name,email,phone,expertise,symptom,userId)
      }





    return (
      
            <form onSubmit={onSubmitHandler}>
                <Input
                    element="input"
                    id="name"
                    type="text"
                    label="ชื่อ - นามสกุล"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid name and lastname."
                    onInput={inputHandler}
                />
                <div className='row'>
                    <div className='colum'>
                            <Input
                                element="input"
                                id="phone"
                                type="text"
                                label="เบอร์โทร"
                                validators={[VALIDATOR_MINLENGTH(10)]}
                                errorText="Please enter a valid phone number and max length 10"
                                onInput={inputHandler}
                            />
                        </div>
                    
                        <div className='colum'>
                            <Input
                                element="input"
                                id="email"
                                type="email"
                                label="อีเมล"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please enter a Email"
                                onInput={inputHandler}
                            />
                        </div>
                </div>

                <div className='expertise'>
                  <label className='label'>ความเชี่ยวชาญ</label>
                  <select name="" id="" className='option' onChange={setValue}>
                    <option value="เลือกโดยเจ้าหน้าที่" key="1" className='option'>เลือกโดยเจ้าหน้าที่</option>
                    {doctors.map(expertise => {
                      return(
                        <option value={expertise} key={expertise} className='option'>{expertise}</option>
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

 

                <div className='buttoncenter'>
                  <Button inverse to='/doctor'>
                      เลือกหมอเอง
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
  );

};



export default FormAppointment
