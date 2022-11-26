import Post from './Post.js';
import '../css-components/List.css';

export default function List(props) {
	const {posts, setPosts, count, setCount, completedCount, setCompletedCount} = props;
	return posts.map((post, index) => 
		<Post count={count} setCount={setCount} key={index} posts={posts} post={post} 
			completedCount={completedCount} setCompletedCount={setCompletedCount}/>)
};