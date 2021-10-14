import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";


export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <h2>Now Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if(isEmpty) {
    return <h2>No data founded</h2>
  }
  
  return (
    <ul className="space-y-5">
      {data?.map((item) => {
        return (
          <li key={item.id} className="border-b pb-2">
            <Link href={`/comments/${item.id}`} prefetch = {false}>
              <a className="block hover:text-blue-400">{item.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};