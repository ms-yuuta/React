import { PostByCommentId } from "src/components/Post/PostByCommentId";

const { useComment } = require("src/hooks/useComment");

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <h2>Now Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <p className="text-2xl font-bold">{data?.body}</p>
      <p className="text-lg">Created by {data?.name}</p>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
        <PostByCommentId id={data?.postId} />
      </div>
    </div>
  );
};
