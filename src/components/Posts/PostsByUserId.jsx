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
      <ul className="space-y-5">
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a className="block group">
                  <h1 className="group-hover:text-blue-500">
                    {post.title}
                  </h1>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
