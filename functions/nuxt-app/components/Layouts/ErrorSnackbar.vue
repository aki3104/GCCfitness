<template>
  <v-snackbar
    v-model="snackbar"
    color="error"
    auto-height
    top
  >
    {{ getMessageText }}
    <v-btn
      dark
      flat
      @click="clearMessage"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        snackbar: false,
      }
    },
    methods: {
      ...mapGetters('message', ['getMessage', 'existsMessage']),
      ...mapActions('message', ['clearMessage']),
    },
    computed: {
      isShow() {
        return this.existsMessage()
      },
      getMessageText() {
        return this.getMessage()
      },
    },
    watch: {
      isShow: function () { // computedのisShow()を監視している
        this.snackbar = this.existsMessage()
      },
      snackbar: function () { // タイマでスナックバーが閉じたときにメッセージをクリアする
        if (!this.snackbar) {
          this.clearMessage()
        }
      }
    },
  }
</script>