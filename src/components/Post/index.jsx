import Head from "next/head";
import { CommentsByPostId } from "src/components/Comments/commentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) {
    return <div>Now loading</div>;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <UserByUserId userId={data.userId} />
        <CommentsByPostId id={data.id} />
      </div>
    </div>
  );
};
