import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Subscribe from '../components/Subscribe';

const Home = () => {
	const blogs = useLoaderData();
	console.log(blogs);

	return (
		<main className="min-h-screen p-4">
			<section className="justify-between gap-8 space-y-8 xl:flex xl:space-y-0">
				{/* featured blog */}
				<div className="w-full xl:w-2/3">
					<Featured blogs={blogs} />
				</div>
				{/* highlights */}
				<div className="w-full xl:w-1/3">
					<Highlights blogs={blogs} />
				</div>
			</section>
			{/* subscribe now */}
			<div className="w-full">
				<Subscribe />
			</div>
		</main>
	);
};

export default Home;
