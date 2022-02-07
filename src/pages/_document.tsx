import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='id'>
        <Head>
          <meta charSet='UTF-8' />
          <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
          <link
            as='font'
            crossOrigin='anonymous'
            href='/fonts/inter-var-latin.woff2'
            rel='preload'
            type='font/woff2'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
