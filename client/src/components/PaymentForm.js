import React, {useState} from 'react'
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import axios from "axios"


const Card_OPTIONS ={
    iconStyle: "solid",
    style: {
        base: {
            iconcolor: "#c4f0ff",
            color: "#fff",
            fontweight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",

        },
        invalid: {
            iconcolor: "#ffc7ee",
            color: "#ffc7ee"
        }
        }
    }

export default function PaymentForm() {
    const [success, setSucess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card" , 
            card: elements.getElement(CardElement)
        })
    

if (!error) {
    try { 
        const {id} = paymentMethod
        const response = await axios.post("https://localhost:5000/payment", {
            amount: 1000,
            id
        })

    if(response.data.success) {
        console.log("Successful payment")
        setSucess(true)
    }

} catch (error) {
    console.log("Error", error )
}

} else {
    console.log(error.message)
}

}
return (
    <>
    {!success ?
    <form onSubmit = {handleSubmit}>
        <fieldset className="FormGroup">
            <div className='FormRow'>
            <CardElement options={Card_OPTIONS}/>
            </div>
            </fieldset>
            <button>Pay</button>
        </form>
    :
        <div>
            <h2>You just bought an Item!</h2>
        </div>
        }
    </>
)
    }