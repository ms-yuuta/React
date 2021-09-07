import  Link  from "next/link";
import { usePosts } from "src/hooks/useFetchArray";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>Now loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>Data is nothing</div>;
  }
  return (
    <ul className="space-y-5">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className="block group">
                <h1 className="text-xl font-bold group-hover:text-blue-500">{post.title}</h1>
                <p className="text-lg text-gray-500 group-hover:text-blue-500">{post.body}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
