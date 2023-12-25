
import Head from "next/head";

const MetaHead = ({name, content}) => {
  return (
    <Head>
    <title>InstaClone App</title>
    <meta name={name} content={content} />
    <link rel="icon" href="/logo.svg" />
  </Head>
  )
}

export default MetaHead;