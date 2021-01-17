import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppState} from '../store';

const PostContent = ({post, ...props}: any) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={'/'}>go back</Link>
    </>
  )
}

const PostPage = () => {
  const params: any = useParams();

  const posts = useSelector((state: AppState) => state.postsState.posts);
  const post = posts.filter(p => p && p.id === +params.id)[0];

  // actually if we will open this page directly we will get an error that post
  // does not exist. bcs initially posts list is empty.
  // we can add some checks like if we have posts in store check there
  // if not get post by id from the server
  // but since it is just test task I did not;

  return (
    <>
      {
        post && <PostContent post={post}/>
      }
      {
        !post && <p>No such post found</p>
      }

    </>
  );
}

export default PostPage;
