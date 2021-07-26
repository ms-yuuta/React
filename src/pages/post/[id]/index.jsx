import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";

export const PostId = () => {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
}
