import React from 'react';
import { Link } from 'react-router-dom';

const ItemHl = ({ blog }) => {
	const { author, category, coverImage, date, id, title } = blog;

	return (
		<Link to={id} className="mb-6 flex gap-4 bg-base-100 shadow">
			<img
				className="h-[100px] w-[100px] rounded rounded-e-none object-cover"
				src={coverImage}
				alt=""
			/>

			<div className="w-3/4 overflow-hidden">
				<p>{category}</p>
				<h2 className="truncate text-xl font-semibold">{title}</h2>
				<p className="text-sm">{author}</p>
				<p className="text-xs">{date}</p>
			</div>
		</Link>
	);
};

export default ItemHl;
