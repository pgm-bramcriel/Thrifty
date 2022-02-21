import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/homepageHeader/Header'
import BaseLayout from '../layouts/BaseLayout'
import styles from '../styles/Home.module.css'
import HomepagePopular from '../components/homepagePopular/HomepagePopular'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Header></Header>
      <HomepagePopular></HomepagePopular>
    </BaseLayout>
  )
}

export default Home
