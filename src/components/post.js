import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch({
        type: "GET_POST_DATA",
        payload: data,
      });
    };
    getPosts();
  }, [dispatch]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Post;
