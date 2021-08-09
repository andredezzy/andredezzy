import { NextSeo } from 'next-seo'
import Image from 'next/image'

import avatarImg from '@/../public/avatar.jpg'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        description="Hi, call me André or Dezzy, happy to see you :D"
        title='André "Dezzy" Victor'
      />

      <main className={styles.main}>
        <div className={styles.avatar}>
          <Image
            alt="André's Avatar Photo"
            height={132}
            src={avatarImg}
            width={132}
          />
        </div>

        <button className={styles.button}>
          Co-Founder & CTO at Payme Trade
        </button>

        <button className={styles.button}>LinkedIn</button>
      </main>
    </div>
  )
}
