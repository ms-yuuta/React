import Link from "next/link";
import { useUsers } from "src/hooks/useUsers";

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <h2>Now Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (isEmpty) {
    return <h2>No data fouded</h2>;
  }

  return (
    <ol>
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
