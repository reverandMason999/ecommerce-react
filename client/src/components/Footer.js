import React from 'react'
import './Footer.css';



const Footer = () => {
  return (
    <div className='Footer-bar'>
      <div className='container'>
        <div className='row'> 
          <div className='col-md-2 col-sm-5'> 
            <h4>Department</h4>
            <ul>
              <li>Furniture</li>
              <li>Tech</li>
              <li>Clothing</li>
              <li>Jewelry</li>
            </ul>
          </div> 
          <div className='col-md-2 col-sm-6'>
            <h4> Services</h4>
            <ul>
              <li>Buy</li>
              <li>Sell</li>
              <li>Gift Card</li>
              <li>Account Signup</li>
            </ul>
          </div>
          <div className='col-md-2 col-sm-6'> 
            <h4> Help </h4>
            <ul>
              <li>Returns</li>
              <li>Track orders</li>
              <li>Security & Fraud</li>
              <li>Contact us </li>
            </ul>
          </div> 
          <div className='col-md-6 col-sm-7'>
            <div className='accepted-payments'>
              <h4>Accepted Payments</h4>
              <div className='payment-icons'> 
                <img className='payment-icon'src='../images/visa.png' alt='Visa' />
                <img className='payment-icon'src='../images/master_card.png' alt='Master Card' />
                <img className='payment-icon'src='../images/apple_pay.png' alt='Apple' />
                <img className='payment-icon'src='../images/google_pay_icon.png' alt='Google' />
                <img className='payment-icon'src='../images/stripe_logo_icon.png' alt='Stripe' />
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'> 
          <div className='footer-bottom'> 
            <p className='text-xs-center'> 
              &copy;{new Date().getFullYear()} City Guide - All Rights Reserved
            </p>
            <div className='footer_below'> 
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/privacy'><div><p>Privacy</p></div></a>
            <a href='/security'><div><p>Security</p></div></a>
            <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>  
    </div>
    </div>
  )
}

export default Footer
