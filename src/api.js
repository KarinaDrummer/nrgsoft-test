import { setup } from 'axios-cache-adapter'
import { lensPath, view } from 'ramda'

const corsProxy = 'https://cors.rina.wtf'

// Axios instance with pre-configured `axios-cache-adapter` attached to it
const axios = setup({
  baseURL: `${corsProxy}/https://reddit.com`,

  cache: {
    maxAge: 2 * 60 * 1000
  }
})

export const getPosts = async (subredditID) => view(
  lensPath(['data', 'data', 'children']),
  await axios.get(`${subredditID}.json`)
)
