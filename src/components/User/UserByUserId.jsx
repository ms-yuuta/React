import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.userId
      ? `https://jsonplaceholder.typicode.com/users/${props.userId}`
      : null,
    fetcher
  );

  if (!data && !error) {
    return <div>Now loading...</div>;
  }
  if (error) {
    return <h3>{error.message}</h3>;
  }

  return <div>{data?.name ? <div>Created By {data.name}</div> : null}</div>;
};
