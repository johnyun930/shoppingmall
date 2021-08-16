import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const publishableKey = "pk_test_51JOdCtEk0bZhl4oBjwS5tnVs8nbCMKwptg84pybxuwzR19vy87XuZpgxQWKFkoCAIQxwIYEBNpf2GWEm8XAYnUYt00v5YQGWhE"

    const onToken = token =>{
        console.log(token);
        alert("Payment Successful");
    }

    return(
        <StripeCheckout 
        label="Pay Now" 
        ame="John's Secret" 
        billingAddress="Hello" 
        shippingAddress="world" 
        image="https://svgshare.com/i/CUz.svg" 
        description={`Your total is $${price}`}
        panelLabel="pay now"
        onToken={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;