import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SSRProvider from 'react-bootstrap/SSRProvider'
import router from 'next/router'

import 'styles/app.scss'
import MainLayout from 'components/layout/MainLayout'
import Loader from 'components/ui/Loader'

const initialValues = {
    isLoaderActive: false
}

function MyApp({ Component, pageProps }: AppProps) {
    const [values, setValues] = useState(initialValues)

    useEffect(() => {
        const setActiveLoader = (status: boolean) => {
            setValues((prevState) => ({
                ...prevState,
                isLoaderActive: status
            }))
        }

        router.events.on('routeChangeStart', () => setActiveLoader(true))
        router.events.on('routeChangeComplete', () => setActiveLoader(false))

        return () => {
            router.events.off('routeChangeStart', setActiveLoader)
            router.events.off('routeChangeComplete', setActiveLoader)
        }
    }, [])

    return (
        <SSRProvider>
            <MainLayout>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
                </Head>
                <Loader isActive={values.isLoaderActive} />
                <Component {...pageProps} />
            </MainLayout>
        </SSRProvider>
    )
}

export default MyApp
