import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta
                        name='description'
                        content="I'm experienced Web Developer seeking opportunity to bring knowledge of programming. A self-motivated IT professional
                        with huge knowledge and proficiency in HTML, CSS, JavaScript, JQuery, Reactjs, Nextjs, Nodejs, PHP and mobile responsive web
                        development, as well as strong skills and ability in writing clean and efficient code."
                    />
                    <meta
                        property='og:description'
                        content="I'm experienced Web Developer seeking opportunity to bring knowledge of programming. A self-motivated IT professional
                        with huge knowledge and proficiency in HTML, CSS, JavaScript, JQuery, Reactjs, Nextjs, Nodejs, PHP and mobile responsive web
                        development, as well as strong skills and ability in writing clean and efficient code."
                    />
                    <link rel='preload' as='font' href='/fonts/myriad-pro.woff2' type='font/woff2' crossOrigin='anonymous' />
                    <link rel='preload' as='font' href='/fonts/myriad-pro.woff' type='font/woff2' crossOrigin='anonymous' />
                    <link rel='preload' as='font' href='/fonts/myriad-pro-light.woff2' type='font/woff2' crossOrigin='anonymous' />
                    <link rel='preload' as='font' href='/fonts/myriad-pro-light.woff' type='font/woff2' crossOrigin='anonymous' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id='js-loader'></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument
