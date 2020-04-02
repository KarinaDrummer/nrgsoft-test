import React from 'react'
import Layout from '../components/Layout'
import SlidingButtons from '../components/SlidingButtons'
import ListOfPosts from '../components/ListOfPosts'

const Home = () => (
  <Layout>
    <SlidingButtons />
    <ListOfPosts />
  </Layout>
)

export default Home
