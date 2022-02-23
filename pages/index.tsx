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
  hotProducts: Array<IProduct>;
  allProducts: Array<IProduct>;
  children?: any;
}

const Home: NextPage<PropsType> = (props: PropsType) => {
  return (
    <BaseLayout>
      <Header></Header>
      <HomepagePopular products={props.hotProducts} ></HomepagePopular>
      <HomepageAllProducts products={props.allProducts}></HomepageAllProducts>
    </BaseLayout>
  )
}

export async function getServerSideProps() {
  const hotProductsRes = await fetch("http://localhost:3000/api/popularProducts");
  const hotProducts = await hotProductsRes.json();

  const allProductsRes = await fetch("http://localhost:3000/api/allProducts");
  const allProducts = await allProductsRes.json();

  return {
    props: {
      hotProducts,
      allProducts,
    }, // will be passed to the page component as props
  }
}

export default Home
