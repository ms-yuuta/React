import { PostsByUserId } from "src/components/Posts/postsByUserId";
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
      <h2>User Page</h2>
      <p>username : {data?.username}</p>
      <p>email : {data?.email}</p>
      <PostsByUserId id={data.id} />
    </div>
  );
};
