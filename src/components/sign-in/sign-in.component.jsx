import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
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
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} type="email" value={this.state.email} label="email"  />

                    <FormInput name="password"handleChange={this.handleChange} type="password" value={this.state.password} label="password" />
                    <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>

                </form>

            </div>
        )
    }   
}

