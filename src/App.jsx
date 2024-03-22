import { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  
  const [isModalView,setIsModalView] = useState(false);
  function handleDisplayDialog(){
    setIsModalView(true);
  }
  return (
    <>
    <MainHeader  handleDisplayDialog={handleDisplayDialog}/>
      <main>

      <PostList  isModalView={isModalView} setIsModalView={setIsModalView}/>
      </main>
    </>
  )
}

export default App
