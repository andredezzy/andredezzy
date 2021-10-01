import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import avatarImg from '@public/avatar.jpg'
import paymeTradeIcon from '@public/icons/payme-trade.svg'
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        description="Hi, my name is André Victor, but can also call me Dezzy. Since I was 10 years old I develop for fun and at 15 I got my first internship. Programming and technology lover since ever. Passionate about Open Source projects. Extremely motivated to develop, learn and help anyone who can."
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
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <Image alt="Payme Trade's Icon" src={paymeTradeIcon} />
            </i>
            Co-Founder & CTO at Payme Trade
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/andredezzy/">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiLinkedin />
            </i>
            LinkedIn
          </a>
        </Link>

        <Link href="https://github.com/andredezzy">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiGithub />
            </i>
            GitHub
          </a>
        </Link>

        <Link href="https://instagram.com/oandredezzy">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiInstagram />
            </i>
            Instagram
          </a>
        </Link>

        <Link href="https://twitter.com/andredezzy">
          <a className={styles.button} rel="noreferrer" target="_blank">
            <i>
              <FiTwitter />
            </i>
            Twitter
          </a>
        </Link>
      </main>
    </div>
  )
}
