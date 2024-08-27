'use client';

interface ViewUserButtonProps {
	id: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ id }) => {
	const handleClick = () => alert(`User ID: ${id}`);

	return (
		<>
			<button onClick={handleClick}>Lihat user</button>
		</>
	);
};

export default ViewUserButton;
