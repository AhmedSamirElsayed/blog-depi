// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-500 w-200 text-center text-gray-100 text-9xl p-5 mx-28 my-32 shadow-lg shadow-white/80">
        404
        <div className="text-teal-400">Page Not Found</div>
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

export default NotFoundPage;
