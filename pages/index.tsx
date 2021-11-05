import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Cron } from '../components'
import { Layout } from '../components/layout/layout.component'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout ligth={false}>
      <Cron />
    </Layout>
  )
}

export default Home
