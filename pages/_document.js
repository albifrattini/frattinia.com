import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Merriweather:700"
                        rel="stylesheet"
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto+Mono:400"
                        rel="stylesheet"
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css?family=Mulish:400,700"
                        rel="stylesheet"
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:700"
                        rel="stylesheet"
                    ></link>
                    <link
                        href="/static/favicons/favicon.ico"
                        rel="shortcut icon"
                    />
                    <link
                        href="/static/favicons/site.webmanifest"
                        rel="manifest"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com/"
                        crossOrigin=""
                    />
                    <link
                        href="/static/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/static/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/static/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#4a9885"
                        href="/static/favicons/safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
