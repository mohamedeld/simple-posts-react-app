import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader({handleDisplayDialog }) {
  
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={handleDisplayDialog}>
          <MdPostAdd size={18} onClick={handleDisplayDialog} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;