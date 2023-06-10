import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51NELfwFcvJ34xJzDmSDbQlhAoycaauos6l1HSwoTDT8HceU73GXrYulkTH5OnzAv2osgUCmQKM2YGnm09MXN6ST700KI8WzTIk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe = {stripeTestPromise}> 
    <PaymentForm />
    </Elements>
  )
}
