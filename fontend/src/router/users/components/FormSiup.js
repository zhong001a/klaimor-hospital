import React from "react";

import Input from "../../../shared/components/Formcomponent/Input";
import Button from "../../../shared/components/UIElement/Button/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../../shared/util/validators";
import { useForm } from "../../../shared/hook/form-hook";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import "./form.style.scss";
const FormSigup = () => {
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const username = formState.inputs.username.value;
    const email = formState.inputs.email.value;
    const password = formState.inputs.password.value;

    await axios.post(`http://localhost:4040/api/users/create`,{username,email,password})
    .then(response => {
      const createId = response.data.createUser._id
      history.push(`/sigup/data/${createId}`);
      
    })
    .catch(err => {
      console.log(err)
    })

  
    
  };

  return (
    <div className="form-container">
      <form className="container" onSubmit={onSubmit}>
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
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid Email."
          onInput={inputHandler}
        />

        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid Password."
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          Sigup
        </Button>
      </form>
    </div>
  );
};

export default FormSigup;
