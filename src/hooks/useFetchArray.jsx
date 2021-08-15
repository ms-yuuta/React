import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

export const useComments = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/comments");
};

export const usePosts = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/posts");
};

export const useUsers = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/users");
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(
    id ? `https://jsonplaceholder.typicode.com/comments?postId=${id}` : null
  );
};

export const usePostsByUserId = (id) => {
  return useFetchArray(
    id ? `https://jsonplaceholder.typicode.com/posts?userId=${id}` : null
  );
};
