import { NextSeo } from 'next-seo'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        description="Hi, call me André or Dezzy, happy to see you :D"
        title='André "Dezzy" Victor'
      />

      <main className={styles.main}>
        <h1 className={styles.title}>André "Dezzy" Victor</h1>

        <button className={styles['tree-button']}>
          Co-Founder & CTO at Payme Trade
        </button>
      </main>
    </div>
  )
}
