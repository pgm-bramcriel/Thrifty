import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/homepageHeader/Header'
import BaseLayout from '../layouts/BaseLayout'
import styles from '../styles/Home.module.css'
import HomepagePopular from '../components/homepagePopular/HomepagePopular'
import HomepageAllProducts from '../components/homepageAllProducts/HomepageAllProducts'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Header></Header>
      <HomepagePopular></HomepagePopular>
      <HomepageAllProducts></HomepageAllProducts>
    </BaseLayout>
  )
}

export default Home
