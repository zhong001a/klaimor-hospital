import React from 'react'

import Input from '../../../shared/components/Formcomponent/Input';
import Button from '../../../shared/components/UIElement/Button/Button';
import { VALIDATOR_REQUIRE} from '../../../shared/util/validators';
import { useForm } from '../../../shared/hook/form-hook';
import  './form.style.scss'
const FormSigup = () => {

    const [formState, inputHandler] = useForm(
        {
          username: {
            value: '',
            isValid: false
          },
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
        <div className='form-container'>
            <form className='container'>
                <Input
                    element="input"
                    id="username"
                    type="text"
                    label="Username"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Username."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="email"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Email."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Password."
                    onInput={inputHandler}
                />  
                <Button to = '/login' inverse type="submit">
                    Login
                </Button>

                <Button to = '/sigup/data' type="submit">
                    Sigup
                </Button>

              
            </form>
        </div>

  );

};



export default FormSigup
