import axios from axion

async asyncData () {
  const myHttpClient = axios.create({
    baseURL: process.env.microCMS_URL,
    headers: { 'X-API-kEY': process.env.microCMS_APIKEY },
  })
  const res = await myHttpClient.get('news')
  return await { newses: res.data.contents }
}