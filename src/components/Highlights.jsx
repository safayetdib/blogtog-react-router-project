import React from 'react';
import ItemHl from './ItemHl';

const Highlights = ({ blogs }) => {
	return (
		<div>
			<h2 className="mb-6 text-xl font-semibold">Highlights</h2>
			<div>
				{blogs.map((blog) => (
					<ItemHl key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
};

export default Highlights;
