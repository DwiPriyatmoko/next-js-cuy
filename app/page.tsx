import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1>Hello bang</h1>
			<br />
			<Link href='/posts'>Post</Link>
			<br />
			<Link href='/albums'>Albums</Link>
		</>
	);
}
