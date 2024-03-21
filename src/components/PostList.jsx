import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList({ posts,setPosts }) {
  function handleAddPost(post){
    setPosts([...posts,post ]);
  }
  return (
    <>
      <NewPost handleAddPost={handleAddPost}/>
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
