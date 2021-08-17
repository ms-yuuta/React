import { usePost } from "src/hooks/usePost";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  console.log({data,error});

  if (isLoading) {
    return <div>Now loading...</div>;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
    </div>
  );
};
