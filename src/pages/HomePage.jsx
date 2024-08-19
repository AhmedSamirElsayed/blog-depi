import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="p-[223px] bg-[url('https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=1024x1024&w=is&k=20&c=47-y8UPbITvHDInivDBKJJiTMzO6Ds78N2UHQUjQZqk=')] bg-no-repeat bg-[1365px,0]  ">
        <div className="flex flex-col justify-center items-center gap-7">
          <h1 className="text-3xl font-bold text-black tracking-[7px]">
            Home page
          </h1>
          <button className="bg-amber-500 px-5 py-2 rounded text-black font-medium hover:opacity-75">
            <Link to={"/blog"}> Go To Blog</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
