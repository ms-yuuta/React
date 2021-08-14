import Link from "next/link";
import { useComments } from "src/hooks/useComments";


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
    <ul>
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/comments/${item.id}`}>
              <a>{item.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};