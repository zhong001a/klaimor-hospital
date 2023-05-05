import React from 'react'

import Input from '../../../shared/components/Formcomponent/Input';
import Button from '../../../shared/components/UIElement/Button/Button';
import { VALIDATOR_REQUIRE} from '../../../shared/util/validators';
import { useForm } from '../../../shared/hook/form-hook';
import  './form.style.scss'
const FormDataUser = () => {

    const [formState, inputHandler] = useForm(
        {
          firstname: {
            value: '',
            isValid: false
          },
          lastname: {
            value: '',
            isValid: false
          },
          gender: {
            value: '',
            isValid: false
          },
          birthdate: {
            value: '',
            isValid: false
          },
          height: {
            value: '',
            isValid: false
          },
          wieth: {
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
                    id="firstname"
                    type="text"
                    label="Firstname"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Firstname ."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="lastname"
                    type="text"
                    label="Lastname"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Lastname ."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="gender"
                    type="text"
                    label="Gender"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Gender."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="birthdate"
                    type="date"
                    label="Birthdate"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Birthdate."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="heigth"
                    type="number"
                    label="Heigth"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Heigth."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="weight"
                    type="number"
                    label="Weigth"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Weigth."
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



export default FormDataUser
