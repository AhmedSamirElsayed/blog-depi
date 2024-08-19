import { Link } from "react-router-dom";

const PostCard = ({ singlePost }) => {
  return (
    <Link to={`/blog/${singlePost.slug}`} className="bg-gray-950 p-3 rounded">
      <img
        className="w-full max-h-52"
        src={singlePost.img ? singlePost.img : ""}
        alt={singlePost.title}
      />
      <h1 className="text-2xl text-red-400 mb-3">{singlePost.title}</h1>
      <p>{singlePost.excert}</p>
    </Link>
  );
};

export default PostCard;
