import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>

        <div className="grid">
          <Link href="/posts">
            <a className="card">
              <h3>Blog &rarr;</h3>
              <p>Check out my technical blog on a range of topics here.</p>
            </a>
          </Link>

          <Link href="/projects">
            <a className="card">
              <h3>Projects &rarr;</h3>
              <p>Check out some of my projects here.</p>
            </a>
          </Link>

          <Link href="/about">
            <a className="card">
              <h3>About &rarr;</h3>
              <p>A little bit more about me.</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className="card">
              <h3>Contact &rarr;</h3>
              <p>Get in touch!</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
