import React from 'react';
import "./navbar.css";

const Navbar = props => {
	console.log(props);
	return (
		<div>
			<nav className="navbar navbar-dark bg-primary">
				<a className="navbar-brand" href="/">Navbar</a>
				<ul className="navbar-nav">
					<li className="nav-item tracking-in-contract">{props.message}</li>
					<li className={`title ${props.correctMessageClass}`}>{props.correctMessage}</li>
					<li className={`title' ${props.incorrectMessageClass}`}>{props.incorrectMessage}</li>
				</ul>
				<ul className="navbar-nav">
					<li className="nav-item">Current Score {props.currentScore} | Top Score {props.topScore}</li>
				</ul>
			</nav>
		</div>
	);
};
export default Navbar;