import {Post} from './post';

export const PostsList = () => {
  const postsList = Array.from({length: 6}, (_, i) => i + 1);

  return postsList.map((_, i) => <Post key={i} />);
};
