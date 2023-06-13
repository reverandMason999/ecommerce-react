import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Card_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
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
        console.log(id);

        const response = await axios.post(
          "http://localhost:5000/payment",
          {
            amount: 1000,
            id
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
