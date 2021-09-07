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
      <ul className="space-y-2">
        {data?.map((item) => {
          return (
            <li key={item.id} className="border-b pb-2">
              <Link href={`/comments/${item.id}`}>
                <a className="block  hover:text-blue-400">{item.body}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
