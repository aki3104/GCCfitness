<template>
  <div> class="page">
    <p>{{ Validation.result }}</p>
    <form @submit.prevent>
      <label>Mail
        <input
          type="text"
          placeholder="メールアドレスを入力"
          v-model="mail"
        >
      </label>
    </form>
    <button type="submit" @click="ckeckForm">
      送信
    </button>
<script>
kk

    var foobar = foo+bar;

export default {
  data () {
    return {
      mail: "",
      Validation:{
        result: "",
      },
    }
  },
}
</script>