import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const UserComponent = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <h2>Now Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">{data?.name}</h2>
      <ul className="list-inside list-disc mt-3 text-lg">
        <li>{data?.email}</li>
        <li>{data?.username}</li>
        <li>{data?.phone}</li>
      </ul>

      <h2 className="text-xl font-bold mt-10">Posts</h2>
      <div className="mt-2">
        <PostsByUserId id={data.id} />
      </div>
    </div>
  );
};
