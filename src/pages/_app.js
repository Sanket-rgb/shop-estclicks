import Layout from "@/components/layout"
import "@/styles/globals.scss"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
