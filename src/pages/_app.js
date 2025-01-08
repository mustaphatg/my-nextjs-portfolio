import '@/styles/globals.css'
import { useEffect, useState } from 'react'



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


    }, [])

    return  getLayout(<Component country={country} {...pageProps} />)

}