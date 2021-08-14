import Head from "next/head";
import { Header } from "src/components/Header";
import { UserComponent } from "src/components/User";

const userId = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UserComponent />
    </div>
  );
};

export default userId;
