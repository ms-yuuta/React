import Head from "next/head";
import { CommentComponent } from "src/components/Comment";
import { Header } from "src/components/Header";
import { API_URL } from "src/utils/api";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => {
    return {
      params: {
        id: comment.id.toString(),
      },
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 10
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 10,
  };
};

const Comment = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Comment Page</title>
      </Head>
      <Header />
      <SWRConfig value={{ fallback }}>
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default Comment;
