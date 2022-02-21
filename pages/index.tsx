import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/homepageHeader/Header'
import BaseLayout from '../layouts/BaseLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Header></Header>
    </BaseLayout>
  )
}

export default Home
