// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_hTiuicdximF3J2f4jfnWfeDI006xoHjaQg');

// This creates a new Customer and attaches the PaymentMethod in one API call.
const customer = await stripe.customers.create({
  payment_method: intent.payment_method,
  email: 'jenny.rosen@example.com',
  invoice_settings: {
    default_payment_method: intent.payment_method,
  },
});

console.log(customer)
console.log('stripe.js')

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_hTiuicdximF3J2f4jfnWfeDI006xoHjaQg');

const subscription = await stripe.subscriptions.create({
  customer: customer.id,
  items: [{ plan: "plan_FSDjyHWis0QVwl" }],
  expand: ["latest_invoice.payment_intent"]
});

const { latest_invoice } = subscription;
const { payment_intent } = latest_invoice;

if (payment_intent) {
  const { client_secret, status } = payment_intent;

  if (status === 'requires_action') {
    stripe.confirmCardPayment(client_secret).then(function(result) {
      if (result.error) {
        // Display error message in your UI.
        // The card was declined (i.e. insufficient funds, card has expired, etc)
      } else {
        // Show a success message to your customer
      }
    });
  } else {
    // No additional information was needed
    // Show a success message to your customer
  }
}