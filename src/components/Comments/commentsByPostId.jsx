import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <h3>Now loading</h3>;
  }
  if (error) {
    return <h3>{error.message}</h3>;
  }
  if (isEmpty) {
    return <h3>No data founded</h3>;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {data?.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>
                <a>{comment.body}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
