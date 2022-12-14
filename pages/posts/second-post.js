import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function secondPost() {
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}