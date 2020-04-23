export default function ({$axios, redirect, store}) {

  $axios.onError(error => {
    if (!error.response) {
      return
    }
    const code = error.response.status
    if (code === 400) {
      if (error.response.data === undefined) {
        return
      }
      const message = error.response.data.message
      if (message === undefined || message === null || message === '') {
        return
      }
      store.commit('message/setMessage', message)
      return
    }
  })

}