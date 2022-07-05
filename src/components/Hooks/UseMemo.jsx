import Props from 'prop-types';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';

const Post = ({ post }) => {
  console.log('Filho renderizou');

  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

const UseMemo = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou');

  useEffect(() => {
    setTimeout(function () {
      fetch('http://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => setPosts(response));
    });
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && (
        <>
          <h1>:C</h1>
          <p>Posts não encontrados, wait a minute...</p>
        </>
      )}
    </div>
  );
};

export default UseMemo;
