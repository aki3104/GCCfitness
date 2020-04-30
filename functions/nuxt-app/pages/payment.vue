<template>
  <v-container text-xs-center>
    <v-row justify="center">
      <v-col class="mx-auto text-left">
        <v-form id="subscription-form">
          <label>
            クレジット・デビットカード番号
          </label>
          <div id="card-element" class="MyCardElement">
            <!-- Stripe Element がここに入ります。 -->
          </div>

          <div id="card-errors" role="alert"></div>
          <div>{{ displayError }}</div>
          <v-btn @click="submitCard">お支払い</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const stripe = Stripe('pk_test_R5RH36P554fEC9B4hCEjqXQr00zuAJWDRi');
const elements = stripe.elements();
const cardElement = elements.create("card");

export default {
  data() {
    return {
      }
  },

  mounted(){
    console.log('mounted')
    const style = {
      base: {
        // ここでStyleの調整をします。
        fontSize: '16px',
        color: "#32325d",
      }
    };
    cardElement.mount("#card-element");
  },
  created(){
    console.log('created')
  },
  computed: {
    displayError(event) {
      console.log(`error ${this.event}`)
      // if (event.error){
        //   return event.error.message
      // } else {
        //   return ''
      // }
    },
  },
  methods: {
    submitCard(event) {
      console.log(stripe)
      console.log(event)
      event.preventDefault()
      stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          //本番はステートから持ってくる
          email: 'jenny.rosen@example.com'
        }
      }).then(this.stripePaymentMethodHandler)
    },

    stripePaymentMethodHandler(result, email) {
      if (result.error) {
        console.log('clickerror')
      } else {
        console.log('clickOk')
        console.log(result)
        fetch('/create-customer', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          //json形式に変換
          body: JSON.stringify({
            email: 'jenny.resen@example.com',
            payment_method: result.paymentMethod.id
          }),
        }).then(function(result){
          console.log(result)
          return result.json()
        }).then(function(customer){
          //the customer has been created
        });
      }
    }
  }
}

</script>

<style scoped>
/**
* Shows how you can use CSS to style your Element's container.
*/
.MyCardElement {
  height: 40px;
  padding: 10px 12px;
  width: 100%;
  color: #32325d;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 4px;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.MyCardElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.MyCardElement--invalid {
  border-color: #fa755a;
}

.MyCardElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>