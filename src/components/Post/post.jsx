import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>Now loading</div>;
  }
  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created By {user.name}</div> : null}
      </div>
    </div>
  );
};
