
import { useState } from "react";
import styles from "./NewPost.module.css";
function NewPost({handleAddPost,hideModalHandler}) {
  const [text,setText] = useState('')
  const [name,setName] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    const data = {
      body:text,
      author:name
    }
    handleAddPost(data);
    hideModalHandler()
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea required id="body" rows={3} value={text} onChange={(e)=> setText(e.target.value)}/>
      </p>
      <p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required value={name} onChange={(e)=> setName(e.target.value)}/>
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={hideModalHandler}>cancel</button>
        <button type='submit'>add</button>
      </p>
    </form>
  )
}

export default NewPost