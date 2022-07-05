import Props from 'prop-types';
import { useRef } from 'react';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');

  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: Props.shape({
    id: Props.number,
    title: Props.string,
    body: Props.string,
  }),
  handleClick: Props.func,
};

const UseRef = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  console.log('Pai renderizou');

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current.value);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
    </div>
  );
};

export default UseRef;
