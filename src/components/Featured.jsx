import React from 'react';
import { Link } from 'react-router-dom';

const Featured = ({ blogs }) => {
	const { author, author_img, content, coverImage, date, id, tags, title } =
		blogs[1];

	return (
		<article className="card min-h-[90vh] w-full rounded-md bg-base-100 shadow">
			<figure className="min-h-[200px]">
				<img className="h-[45vh] w-full object-cover" src={coverImage} alt="" />
			</figure>
			<div className="card-body">
				<Link to={id} className="card-title mb-4 text-4xl">
					{title}
					<div className="badge-secondary badge">NEW</div>
				</Link>
				<div className="mb-4 flex items-center gap-4">
					<img className="w-16 rounded-full" src={author_img} alt="" />
					<div>
						<p className="font-semibold">{author}</p>
						<p className="font-extralight">{date}</p>
					</div>
				</div>
				<div className="mb-4 font-light">
					{content} <Link className="link-secondary link">Read More</Link>
				</div>
				<div className="card-actions justify-end">
					{tags.map((tag, index) => (
						<Link key={index} className="badge-outline badge">
							{tag}
						</Link>
					))}
				</div>
			</div>
		</article>
	);
};

export default Featured;
