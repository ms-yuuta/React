import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/commentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

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
        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <p className="text-xl text-gray-800 mt-2">{data?.body}</p>
        <h2 className="text-xl font-bold mt-6">User</h2>
        <UserByUserId userId={data.userId} />
        <h2 className="text-xl font-bold mt-10">Comments List</h2>
        <div className="mt-3">
          <CommentsByPostId id={data.id} />
        </div>
      </div>
    </div>
  );
};
