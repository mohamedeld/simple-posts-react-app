import { useState } from "react";
import PostList from "./components/PostList";

const allPosts = [
  {id:1,author:'mohamed',body:'welcome in programming'},
  {id:2,author:'ahmed',body:'hello world'},
  {id:3,author:'ali',body:'are you ready'}
]
function App() {
  const [posts,setPosts] = useState(allPosts);
  return (
    <>
   
      <PostList posts={posts} setPosts={setPosts}/>
    </>
  )
}

export default App
