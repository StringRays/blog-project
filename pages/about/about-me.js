import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function aboutMe() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>Activist, nerd, and developer with strong interests in systems of power and how we as humans interact with them.</p>
    </Layout>
  )
}