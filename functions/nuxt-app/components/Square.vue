<template>
  <section>
    <div id="form-container">
      <div id="sq-card-number"></div>
      <div class="third" id="sq-expiration-date"></div>
      <div class="third" id="sq-cvv"></div>
      <div class="third" id="sq-postal-code"></div>
      <button id="sq-creditcard" class="button-credit-card" onclick="onGetCardNonce(event)">Pay $1.00</button>
    </div> <!-- end #form-container --> 
    <!-- TODO: Add script from step 1.1.3 -->
     Get ready for your first payment with Square!
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>


<style scoped>

</style>

