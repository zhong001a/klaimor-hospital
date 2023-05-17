import React, {useEffect} from 'react'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'
import Input from '../../shared/components/Formcomponent/Input'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Button from '../../shared/components/UIElement/Button/Button'
import { useForm } from '../../shared/hook/form-hook'
import {GoogleLogin} from 'react-google-login'
import { gapi } from 'gapi-script'
import './auth.css'
const Auth = () => {
    const clientId = '847564555144-ipeiljhql8cedc9nfvpv07m3d85plpgu.apps.googleusercontent.com';
    useEffect(()=>{
        const initClient = () =>{
            gapi.client.init({
                clientId: clientId,
                scope:""
            })
        }
        gapi.load("client:auth2", initClient)
    },[])

    const onSuccess = (res)=>{
        console.log("success", res)
    }
    
    const onFailure = (res) =>{
        console.log("fail", res)
    }

    const [formState, inputHandler] = useForm(
        {
          username: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          },

        },
        false
      );
  return (
    <div className="dropdown-container">
        
        <div className="form-item">
            
            <form >
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
                    id="password"
                    type="text"
                    label="Password"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Username."
                    onInput={inputHandler}
                />
                
            </form>
            <div className="button-group">
                <Button>Log In</Button>
        
                <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
                
                <span>Don't have an account <Link to="#">Sign up</Link></span>
            </div>
        </div>

    </div>
  )
}

export default Auth
