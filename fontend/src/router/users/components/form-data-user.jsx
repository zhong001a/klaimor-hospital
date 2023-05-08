import React from 'react'

import Input from '../../../shared/components/Formcomponent/Input';
import Button from '../../../shared/components/UIElement/Button/Button';
import { VALIDATOR_REQUIRE} from '../../../shared/util/validators';
import { useForm } from '../../../shared/hook/form-hook';
import  './form.style.scss'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
          weight: {
            value: '',
            isValid: false
          }
        },
        false
      );

    const userId = useParams().uid;
    const history = useHistory();
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const firstname = formState.inputs.firstname.value;
      const lastname = formState.inputs.lastname.value;
      const gender = formState.inputs.gender.value;
      const birthdate = formState.inputs.birthdate.value;
      const height = formState.inputs.height.value;
      const weight = formState.inputs.weight.value;

      await axios.post(`http://localhost:4040/api/users/create/data`,{firstname, lastname, gender, birthdate, height, weight, userId})
      .then(response => {
        console.log(response.data)
        history.push('/appointment')
    
      })
      .catch(err => {
        console.log(err)
      })
  
      // console.log(firstname, lastname, gender, birthdate, height, weight, userId)
    }
    return (
        <div className='form-container'>
            <form className='container' onSubmit={onSubmitHandler}>
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
                    id="height"
                    type="number"
                    label="height"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid height."
                    onInput={inputHandler}
                />

                <Input
                    element="input"
                    id="weight"
                    type="number"
                    label="Weight"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Weight."
                    onInput={inputHandler}
                />


                <Button to = '/login' inverse type="submit">
                    Login
                </Button>

                <Button  type="submit" >
                    Sigup
                </Button>

              
            </form>
        </div>

  );

};



export default FormDataUser
