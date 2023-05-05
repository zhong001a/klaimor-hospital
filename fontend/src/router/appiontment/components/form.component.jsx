import React from 'react'

import Input from '../../../shared/components/Formcomponent/Input';
import Button from '../../../shared/components/UIElement/Button/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from '../../../shared/util/validators';
import { useForm } from '../../../shared/hook/form-hook';
import  './form.style.scss'
const FormAppointment = () => {

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
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );
    return (
      
            <form >
                <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Name Lastname"
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
                                label="Phone Number"
                                validators={[VALIDATOR_REQUIRE(),VALIDATOR_MAXLENGTH(10)]}
                                errorText="Please enter a valid phone number and max length 10"
                                onInput={inputHandler}
                            />
                        </div>
                    
                        <div className='colum'>
                            <Input
                                element="input"
                                id="email"
                                type="email"
                                label="Email"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Please enter a Email"
                                onInput={inputHandler}
                            />
                        </div>
                </div>

               
                
                <Input
                    element="textarea"
                    id="status"
                    type="text"
                    label="Initial Symptoms"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a Initial Symptoms"
                    onInput={inputHandler}
                />
                
                <Button inverse type="submit">
                    Submit
                </Button>

                <Button  type="submit">
                    Submit
                </Button>
            </form>

  
  );

};



export default FormAppointment
