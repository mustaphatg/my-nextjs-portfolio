import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {


    // data
    const [country, setCountry] = useState()

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)


    // get Ip
    useEffect(() => {

        fetch('https://api.country.is/')
            .then(data => data.json())
            .then(data => {
                console.log(data)
                console.log(pageProps)
                setCountry(data?.country)
            })
            .catch(err => {
                console.log(err)
            })



        // register
        if (window?.location.port !== '3000') {

            navigator.serviceWorker.register('/sw.js')
                .then(e => { })
        }


    }, [])

    return getLayout(
        <>
            <Head>
                <link rel="preload" as="image" href="/images/musty.jpg"></link>
                <title>Ibrahim Mustapha. Senior Fullstack PHP Developer</title>
                <meta name="theme-color" content="#111827"></meta>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://mustapha.com.ng" />
                <meta name="twitter:title" content="Ibrahim Mustapha. Senior Fullstack PHP Developer." />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="https://mustapha.com.ng/images/Mustapha.jpg" />
                <meta name="twitter:creator" content="@mustapha_tg" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Ibrahim Mustapha. Senior Fullstack PHP Developer" />
                <meta property="og:description" content="Senior PHP developer with " />
                <meta property="og:site_name" content="Ibrahim Mustapha" />
                <meta property="og:url" content="https://mustapha.com.ng" />
                <meta property="og:image" content="https://mustapha.com.ng/images/Mustapha.jpg" />
            </Head>
            <Component country={country} {...pageProps} />
        </>

    )

}