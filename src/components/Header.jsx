import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<Link to="/" className="btn-ghost btn gap-2 text-xl normal-case">
						<FontAwesomeIcon icon={faNewspaper} />
						BlogTog
					</Link>
				</div>
				<div className="hidden flex-none gap-2 sm:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<NavLink
								to="/write"
								className="btn-ghost btn text-lg normal-case">
								Write
							</NavLink>
						</li>
						<li tabIndex={0}>
							<a className="btn-ghost btn text-lg normal-case">
								Categories
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24">
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul className="bg-base-100 p-2">
								<li>
									<Link to="/arts">Arts</Link>
								</li>
								<li>
									<Link to="/business">Business</Link>
								</li>
								<li>
									<Link to="/tech">Tech</Link>
								</li>
							</ul>
						</li>
					</ul>

					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input-bordered input"
						/>
					</div>
					<div className="dropdown-end dropdown">
						<label tabIndex={0} className="btn-ghost btn-circle avatar btn">
							<div className="w-10 rounded-full">
								<img src="https://randomuser.me/api/portraits/thumb/men/11.jpg" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
							<li>
								<Link to="/profile" className="justify-between">
									Profile
									<span className="badge">New</span>
								</Link>
							</li>
							<li>
								<Link to="/settings">Settings</Link>
							</li>
							<li>
								<Link to="/logout">Logout</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
