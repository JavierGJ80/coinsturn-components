import React, { useState } from 'react';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './index.css';

const stripePromise = loadStripe('TU_CLAVE_PUBLICA_DE_STRIPE');

export interface StripePayProps {
  // Define any necessary props here
}

const StripePay: React.FC<StripePayProps> = ({ /* Pass the required props */ }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(10); // Default amount of $10

  const handlePayment = async () => {
    try {
      const { client_secret } = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }), // Convert the amount to cents
      }).then((response) => response.json());

      if (stripe && elements) {
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        });

        if (paymentResult.error) {
          setError(paymentResult.error.message ?? 'Unknown error');
          setSuccess(false);
        } else if (paymentResult.paymentIntent?.status === 'succeeded') {
          setError(null);
          setSuccess(true);
        }
      }
    } catch (error) {
      setError('Error processing payment');
      setSuccess(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePayment();
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAmount = Number(event.target.value);
    setAmount(selectedAmount);
  };

  return (
    <form className="stripe-pay-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="card-element">Tarjeta de credito</label>
        <CardElement id="card-element" options={{ /* Custom options for the card element */ }} />
      </div>
      <div className="form-row select-container">
        <label htmlFor="amount-select">Selecciona monto en dolares:</label>
        <select id="amount-select" value={amount} onChange={handleAmountChange}>
          <option value={10}>$10</option>
          <option value={20}>$20</option>
        </select>
      </div>
      {error && <div className="error-message">Error: {error}</div>}
      {success && <div className="success-message">Payment successful</div>}
      <button className="pay-button" type="submit" disabled={!stripe}>
        Pagar ${amount}
      </button>
    </form>
  );
};

const App: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripePay /* Pass the required props */ />
    </Elements>
  );
};

export default App;
