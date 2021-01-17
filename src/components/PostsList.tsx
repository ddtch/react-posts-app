import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppState} from '../store';

const PostsList = () => {
  const posts = useSelector((state: AppState) => state.postsState.posts);
  const [searchingValue, setSearchingValue] = useState('');

  const handleSearch = (e: any) => {
    setSearchingValue(e.target.value.toLowerCase());
  }

  const filteredPosts = posts.filter(post => post && post.body.toLowerCase().includes(searchingValue));

  return (
    <>
      <label>
        Search post by content
        <input type="text" onChange={handleSearch} value={searchingValue}/>
      </label>
      <ul className="posts-list">
        {
          posts && filteredPosts.map(post =>
            <li key={post.id}>
              <div className="post-title">{post.title}</div>
              <p>{post.body.slice(0, 100)}...</p>
              <Link to={`/posts/${post.id}`}>See more</Link>
            </li>
          )
        }
        {
          !posts.length && <p>No posts yet!</p>
        }
        {
          posts.length && searchingValue && !filteredPosts.length && <p>No posts matching query!</p>
        }
      </ul>
    </>
  )
}

export default PostsList;
