import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import avatarImg from '@public/avatar.jpg'
import paymeTradeIcon from '@public/icons/payme-trade.svg'
import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

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

        <Link href="https://paymetrade.com/">
          <a className={styles.button} target="_blank">
            <i>
              <Image alt="Payme Trade's Icon" src={paymeTradeIcon} />
            </i>
            Co-Founder & CTO at Payme Trade
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/andredezzy/">
          <a className={styles.button} target="_blank">
            <i>
              <FiLinkedin />
            </i>
            LinkedIn
          </a>
        </Link>

        <Link href="https://github.com/andredezzy">
          <a className={styles.button} target="_blank">
            <i>
              <FiGithub />
            </i>
            GitHub
          </a>
        </Link>
      </main>
    </div>
  )
}
