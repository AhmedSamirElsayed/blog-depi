import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PostCard from "../components/layout/posts/postCard";
import MainFooter from "../components/layout/footer/MainFooter";

const BlogPage = () => {
  const Navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/posts");

      if (res.ok) {
        const data = await res.json();
        // console.log(data);
        setPosts(data);
      } else {
        // throw new Error("something went wrong");
        setError("something went wrong");
      }
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPosts = useMemo(() => {
    const search = searchParams.get("search") || "";
    if (!search) return posts;

    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [searchParams, posts]);
  return (
    <>
      <section>
        <div className="container py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10 ">
              <button
                className="bg-amber-500 px-5 py-2 rounded text-black font-medium hover:opacity-75"
                // -1 back one step , (-2 || '..') back two step,....
                onClick={() => Navigate(-1)}
              >
                Go to Previos page
              </button>
              <h1 className="text-2xl font-bold relative before:absolute before:content[] before:w-10 before:h-1 before:bg-amber-500 before:-bottom-3">
                Latest Blog
              </h1>
            </div>

            {/* search */}
            <div className="p-4">
              <input
                className="p-2 px-3 rounded-md bg-transparent border"
                type="text"
                placeholder="search"
                value={searchParams.get("search") || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) {
                    setSearchParams({ search: value });
                  } else {
                    setSearchParams({});
                  }
                }}
              />
            </div>
          </div>

          {isLoading && (
            <div className="text-center font-extrabold mt-4 ">
              {" "}
              Loading.....
            </div>
          )}
          {error && (
            <div className="text-center font-extrabold mt-4 text-red-600">
              {error}
            </div>
          )}

          {!isLoading && !error && (
            <>
              {!posts.length ? (
                <div>No Data </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {""}
                  {filterPosts.map((singlePost) => (
                    // <div key={singlePost.id}>{singlePost.title}</div>
                    <PostCard singlePost={singlePost} key={singlePost.id} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default BlogPage;
