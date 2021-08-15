import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

  if (isLoading) {
    return <h2>Now Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (isEmpty) {
    return <h2>No data founded</h2>;
  }

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/posts/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
