import { get } from 'axios'

const corsProxy = 'http://cors.rina.wtf'

export default {
  fetchPosts: async (subredditID) =>
    await get(
      `${corsProxy}/https://reddit.com${subredditID}.json`
    )
}
