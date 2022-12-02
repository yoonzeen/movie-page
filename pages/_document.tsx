import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charSet='utf-8' />
            <meta name="description" content="Next.js에서 api호출 해보자" />
            <title>Next.js를 배워보자</title>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
 