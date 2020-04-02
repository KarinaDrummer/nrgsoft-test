import { get } from 'axios'

const corsProxy = 'https://cors-anywhere.herokuapp.com'

export default {
  fetchPosts: async (subredditID) =>
    await get(
      `${corsProxy}/https://reddit.com/r/${subredditID}.json`
    )
}
