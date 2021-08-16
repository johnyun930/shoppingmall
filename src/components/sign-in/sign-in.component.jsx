import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { ButtonContainers, SignInContainer,Title, } from './sign-in.styles.js';
export default class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();

        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(err){
            console.log(err);
        }
    }

    handleChange = e =>{
        const {value, name} = e.target;

        this.setState({[name]:value});
    }
    

    render(){

        return(
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} type="email" value={this.state.email} label="email"  />

                    <FormInput name="password"handleChange={this.handleChange} type="password" value={this.state.password} label="password" />
                    <ButtonContainers>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle} googleSignIn >Sign In with Google</CustomButton>
                    </ButtonContainers>

                </form>

            </SignInContainer>
        )
    }   
}

