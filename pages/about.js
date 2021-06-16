import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/about.module.scss'

function Avatar() {
  return <Image src="/images/profile.jpg" alt="me" width="216" height="216" />
}

export default function About() {
	return (
		<div className="container">
			<Head>
				<title>About Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
			</h1>
      <div>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
			<main>
				<h2 className={styles.Red}>How to Add Sass/Scss Inside next.js</h2>
			</main>

		</div>
	)
}
