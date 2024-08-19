import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-400 w-200 text-center text-gray-100  p-14 mx-28 mt-20 mb-32 shadow-lg shadow-white/80">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ea
        dignissimos similique delectus corrupti voluptatem. Delectus fugiat
        labore natus amet eligendi consequuntur magni officia porro quas optio,
        quibusdam quasi esse.
        <div className="mt-5">asdsffghgfd@gmail.com</div>
        <div>010xxxxxxxxx</div>
      </div>

      <button
        className="bg-amber-500 px-5 py-2 rounded text-black font-medium hover:opacity-75"
        onClick={() => Navigate("/")}
      >
        {/* <Link to={"/"}>Go to Home page</Link> */}
        Go to Home page
      </button>
    </>
  );
};

export default AboutPage;
