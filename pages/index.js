import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>InstaClone App</title>
        <meta name="InstaClone" content="only for educational purposes" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <h1 className="font-mono text-red-500">Hello word</h1>
      </main>
    </div>
  );
}
