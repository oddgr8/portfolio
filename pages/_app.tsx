import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload" id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Head>
                <title>Onkar Deshpande</title>
                <meta
                    name="description"
                    content="Portfolio website for Onkar Deshpande"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
