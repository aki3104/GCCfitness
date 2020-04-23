<template>
  <v-snackbar
    timeout="3000"
  >
    <slot />
    <v-btn
      color="red"
      text
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>