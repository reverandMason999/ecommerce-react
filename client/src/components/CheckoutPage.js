// import React from "react";
// import { confirmPayment, StripeProvider } from '@stripe/stripe-react-native';
// import { CardField, useStripe } from '@stripe/stripe-react-native';



// function App() {
//     return (
//       <StripeProvider
//         publishableKey="pk_test_51NELfwFcvJ34xJzDmSDbQlhAoycaauos6l1HSwoTDT8HceU73GXrYulkTH5OnzAv2osgUCmQKM2YGnm09MXN6ST700KI8WzTIk"
//         urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
//         merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
//       >
//         // Your app code here
//       </StripeProvider>
//     );
//   }

//   function PaymentScreen() {
//     // ...
//   const fetchPaymentIntentClientSecret = async () => {
//       const response = await fetch(`${API_URL}/create-payment-intent`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           currency: 'usd',
//         }),
//       });
//       const {clientSecret} = await response.json();
  
//       return clientSecret;
//     };

//     const handlePayPress = async () => {
//       const billingDetails: BillingDetails = {
//         email: 'alex.test@example.com'
//       };
//       if (!card) {
//         return;
//       }

//       const clientSecret = await fetchPaymentIntentClientSecret();
//     };
//     const {paymentIntent, error} = await confirmPayment(clientSecret, {
//       paymentMethodType: 'Card',
//       paymentMethodData: {
//         billingDetails,
//       }
//     })

//     if (error) {
//       console.log('Payment confirmation error', error);
//     } else if (paymentIntent) {
//       console.log('Success from promise', paymentIntent);
//     }
//     };

    


//     return (
//       <View>
//         <CardField
//           onCardChange={(cardDetails) => {
//             console.log('cardDetails', cardDetails);
//           <Button onPress={handlePayPress} title="Pay" disabled={loading} />
//           }}
//         />
//       </View>
//     );
  