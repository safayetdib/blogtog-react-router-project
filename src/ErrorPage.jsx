import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-8">
			<h1 className="text-7xl font-extrabold">Oops!</h1>
			<h4 className="text-4xl font-extrabold">404 - Page Not Found</h4>
			<Link to="/" className="btn">
				Go Back To Homepage
			</Link>
		</div>
	);
};

export default ErrorPage;
