import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

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
    <ul className="grid grid-cols-2 gap-6">
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>
              <a className="block p-4 shadow rounded hover:bg-gray-100">
                <h1 className="text-xl font-bold truncate">{item.name}</h1>
                <div className="truncate">{item.email}</div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
