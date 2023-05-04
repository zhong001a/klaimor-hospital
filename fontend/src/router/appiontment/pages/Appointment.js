import React,{useState} from 'react'
import Card from '../../../shared/components/UIElement/Card/Card';
import Input from '../../../shared/components/Formcomponent/Input';
import Button from '../../../shared/components/UIElement/Button/Button';
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
import { useForm } from '../../../shared/hook/form-hook';
import './appointment.css'
const Appointment = () => {

    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );
    return (
        <div className="apppointment">
        <form className='form-container'>
            <table className='table-container'>
                <tr>
                    <td className='td=half'>
                       
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            label="Name - Lastname "
                            validators={[VALIDATOR_REQUIRE()]}
                    
                            errorText="Please enter a name."
                            onInput={inputHandler}
                        />
                    </td>
                    <td >
                       
                       <Input
                           element="input"
                           id="name"
                           type="text"
                           label="Name - Lastname "
                           validators={[VALIDATOR_REQUIRE()]}
                   
                           errorText="Please enter a name."
                           onInput={inputHandler}
                       />
                   </td>
                </tr>

            </table>
    
            <Button type="submit" disabled={!formState.isValid}>
                Save
            </Button>
        </form>

      </div>
  
  );

};


export default Appointment
