import CardList from '../components/Posts/CardList';
import ViewUserButton from '../components/Posts/ViewUserButton';

const base_url = 'https://jsonplaceholder.typicode.com/posts';

// server component
const Posts = async () => {
	const response = await fetch(base_url, {
		next: { revalidate: 10 },
	});
	const posts: Ipost[] = await response.json();

	interface Ipost {
		userId: number;
		id: number;
		title: string;
		body: string;
	}
	return (
		<>
			<h3>{new Date().toTimeString()}</h3>
			<h1 className='text-fuchsia-500'>Posts</h1>
			{/* client components */}
			{posts.map((post) => (
				<CardList key={post.id}>
					<p>ID: {post.id}</p>
					<h2>Title: {post.title}</h2>
					<p>Body: {post.body}</p>
					<ViewUserButton id={post.id} />
				</CardList>
			))}
		</>
	);
};

export default Posts;
