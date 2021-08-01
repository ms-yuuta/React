import Head from "next/head";
import { Header } from "src/components/Header";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.js</h1>
      <p>Json placeholderを学ぼう</p>
    </div>
  );
}
