import { usePost } from "src/hooks/usePost";
import  Link  from "next/link";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  console.log({ data, error });

  if (isLoading) {
    return <div>Now loading...</div>;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <Link href={`/post/${data?.id}`}>
        <a className="text-lg hover:text-blue-500">{data?.title}</a>
      </Link>
    </div>
  );
};
