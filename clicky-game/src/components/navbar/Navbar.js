import React from 'react';
import "./navbar.css";

const Navbar = props => {
	console.log(props);
	return (
		<div>
			<nav className="navbar navbar-dark bg-primary">
				<a className="nav-text navbar-brand" href="/">Reload Page</a>
				<ul className="navbar-nav">
					<li className="nav-item nav-text-message tracking-in-contract">{props.message}</li>
					<li className={`title nav-text-message ${props.correctMessageClass}`}>{props.correctMessage}</li>
					<li className={`title nav-text-message ${props.incorrectMessageClass}`}>{props.incorrectMessage}</li>
				</ul>
				<ul className="navbar-nav">
					<li className="nav-text nav-item">Current Score {props.currentScore} | Top Score {props.topScore}</li>
				</ul>
			</nav>
		</div>
	);
};
export default Navbar;