import React from "react";
import { connect } from "react-redux";
import { auth, googleProvider } from "../../firebase/firebase.utils";
// import { singInWithGoogle } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { signInWithGoogle } from "../../redux/user/user.sagas";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonContainers, SignInContainer, Title } from "./sign-in.styles.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    console.log(signInWithGoogle);
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            value={this.state.email}
            label="email"
          />

          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            value={this.state.password}
            label="password"
          />
          <ButtonContainers>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={googleSignInStart}
              // onClick={() => auth.signInWithPopup(googleProvider)}
              googleSignIn
            >
              Sign In with Google
            </CustomButton>
          </ButtonContainers>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
