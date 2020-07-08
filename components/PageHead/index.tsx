import Head from "next/head"

interface PageHeadProps {
  title: string
  description: string
}
const PageHead = ({ title, description }: PageHeadProps) => (
  <Head>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
)

export default PageHead
