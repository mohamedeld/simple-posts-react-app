import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

const allPosts = [
  {id:1,author:'mohamed',body:'welcome in programming'},
  {id:2,author:'ahmed',body:'hello world'},
  {id:3,author:'ali',body:'are you ready'}
]
function PostList({ isModalView,setIsModalView }) {
  const [posts,setPosts] = useState(allPosts);
  function handleAddPost(post) {
    setPosts((prevState)=> [...prevState,post]);
  }
  function hideModalHandler(){
    setIsModalView(false)
  }

  return (
    <>
     { isModalView && <Modal onClose={hideModalHandler}>
        <NewPost handleAddPost={handleAddPost} hideModalHandler={hideModalHandler} />
      </Modal>}
      <ul className={styles.posts}>
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            return <Post key={post.id} author={post.author} body={post.body} />;
          })
        ) : (
          <h3>there are no items</h3>
        )}
      </ul>
    </>
  );
}

export default PostList;
