import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pl-PL">
        <Head>
          {process.env.NODE_ENV === 'production' && (
            <>
              <script async src="https://www.google-analytics.com/analytics.js" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.ga=window.ga||function(){(ga.q = ga.q || []).push(arguments)};ga.l=+new Date;
                ga('create', '${process.env.GA_TRACKING_ID}', 'auto'); ga('send', 'pageview');`,
                }}
              />
            </>
          )}
          <link rel="preload" href="/assets/fonts/MavenPro-Regular.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/assets/fonts/MavenPro-Medium.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/assets/fonts/MavenPro-Bold.ttf" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
