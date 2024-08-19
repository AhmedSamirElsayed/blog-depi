import { useParams, useNavigate } from "react-router-dom";

import { useCallback, useEffect, useMemo, useState } from "react";
import NotFoundPage from "./NotFoundPage";

const SinglePostPage = () => {
  const Navigate = useNavigate();
  const params = useParams();
  const postSlug = params.slug;

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostInfo = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:5000/posts?slug=${postSlug}`);

      if (res.ok) {
        const data = await res.json();
        // console.log(data);
        if (data.length > 0) {
          setPost(data[0]);
        } else {
          setError("Data Not Found");
        }
      } else {
        // throw new Error("something went wrong");
        setError("something went wrong");
      }
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [postSlug]);

  useEffect(() => {
    fetchPostInfo();
  }, []);

  // const LenthOfContent = useMemo(() => {
  //   return post?.content?.length || 0;
  // }, [post?.content]);

  return (
    <section className="py-12">
      {isLoading && (
        <div className="text-center font-extrabold mt-4 "> Loading.....</div>
      )}
      {error && (
        <div className="text-center font-extrabold mt-4 text-red-600">
          {error}
          <NotFoundPage />
        </div>
      )}

      {!isLoading && !error && post && (
        <div className="container flex gap-x-4 py-8 my-9">
          <div>
            <h1 className="text-3xl mb-5 text-amber-500 ">{post.title}</h1>

            <h3>{post.excert}</h3>
            <code className="bg-amber-600 text-white p-1 rounded">
              {post.content?.length}
              {/* {LenthOfContent} */}
            </code>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <img src={post.img ? post.img : ""} alt={post.title} />
        </div>
      )}
      <button
        className="bg-amber-500 px-5 py-2 rounded text-black font-medium hover:opacity-75 absolute right-5"
        // -1 back one step , (-2 || '..') back two step,....
        onClick={() => Navigate(-1)}
      >
        Go to Previos page
      </button>
    </section>
  );
};

export default SinglePostPage;
