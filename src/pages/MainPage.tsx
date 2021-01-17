import React, {useEffect} from 'react';
import PostsList from '../components/PostsList';
import {getAllPosts} from '../store/posts/actions';
import {useDispatch} from 'react-redux';

const MainPage: React.FC<any> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts())
  });

  return (
    <>
      <h1>Best posts for you</h1>
      <PostsList/>
    </>
  );
}

export default MainPage;
