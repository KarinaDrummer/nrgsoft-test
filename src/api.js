import { get } from 'axios'

export default {
  fetchPosts: async (subredditID) =>
    await get(`https://reddit.com/r/${subredditID}.json`)
}
