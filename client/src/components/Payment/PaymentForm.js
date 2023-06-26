import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Card_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#C4F0FF",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE"
    }
  }
};


export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "/payment",
          {
            amount: 5000,
            id: id
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = response.data;
        console.log(responseData);
        if (responseData.success) {
          setSuccess(true);
        } else {
            console.log("wrong credentials")
          // Handle payment failure
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className='FormRow'>
              <CardElement options={Card_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>You just bought an Item!</h2>
        </div>
      )}
    </>
  );
}