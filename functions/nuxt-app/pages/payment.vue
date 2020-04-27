<template>
  <v-container text-xs-center>
    <v-row justify="center">
      <v-col class="mx-auto text-left">
        <v-form action="/charge" method="post" id="payment-form">
          <label for="card-element">
            クレジット・デビットカード番号
          </label>
          <div id="card-element">
            <!-- Stripe Element がここに入ります。 -->
          </div>

          <div id="card-errors" role="alert"></div>
          <!-- Element のエラーを入れます。 -->
          <v-btn>お支払い</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
 
    }
  },

  mounted(){
    var stripe = Stripe('pk_test_R5RH36P554fEC9B4hCEjqXQr00zuAJWDRi'); 
    var elements = stripe.elements();// Element作成時に options から スタイルを調整できます.
    var style = {
      base: {
        // ここでStyleの調整をします。
        fontSize: '16px',
        color: "#32325d",
      }
      };

      // card Element のインスタンスを作成
      var card = elements.create('card', {style: style});

      // マウント
      card.mount('#card-element');
  },
  
  method: {

  }
}

</script>

<style scoped>
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>