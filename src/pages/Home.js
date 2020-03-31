import React from 'react'
import store from '../store'
import Layout from '../components/Layout'
import SlidingButtons from '../components/SlidingButtons'
import ListOfPosts from '../components/ListOfPosts'

const { list } = store.getState().posts

const Home = () => (
  <Layout>
    <SlidingButtons />
    <ListOfPosts posts={list} />
  </Layout>
)

export default Home
