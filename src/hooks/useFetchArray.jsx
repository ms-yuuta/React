import { API_URL } from "src/utils/api";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};


export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(
    id ? `${API_URL}/comments?postId=${id}` : null
  );
};

export const usePostsByUserId = (id) => {
  return useFetchArray(
    id ? `${API_URL}/posts?userId=${id}` : null
  );
};
