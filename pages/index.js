import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href="/faq">
          <a>
              go to faq
          </a>
      </Link>
    </div>
  )
}
