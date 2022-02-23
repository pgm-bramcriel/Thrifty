import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/homepageHeader/Header'
import BaseLayout from '../layouts/BaseLayout'
import styles from '../styles/Home.module.css'
import HomepagePopular from '../components/homepagePopular/HomepagePopular'
import HomepageAllProducts from '../components/homepageAllProducts/HomepageAllProducts'
import { IProduct } from './api/popularProducts'

type PropsType = {
  test: Array<IProduct>;
  children?: any;
}

const Home: NextPage = (props: PropsType) => {
  console.log(props);

  return (
    <BaseLayout>
      <Header></Header>
      <HomepagePopular products={props.test} ></HomepagePopular>
      <HomepageAllProducts></HomepageAllProducts>
    </BaseLayout>
  )
}

export async function getServerSideProps() {
  const products = await fetch("http://localhost:3000/api/popularProducts");
  const test = await products.json();
  return {
    props: {test}, // will be passed to the page component as props
  }
}

export default Home
