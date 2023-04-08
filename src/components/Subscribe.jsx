import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
	return (
		<div className="mt-8 flex w-full flex-wrap items-center justify-center gap-6 bg-gray-100 p-8">
			<h2 className="text-2xl">Sign up for Updates &amp; Newsletters.</h2>
			<form className="flex flex-wrap items-center justify-center gap-4">
				<input
					className="input"
					type="email"
					placeholder="Your Email Address"
				/>
				<Link className="btn">Subscribe Now</Link>
			</form>
		</div>
	);
};

export default Subscribe;
