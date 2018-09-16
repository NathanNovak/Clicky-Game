import React from 'react';
import "./Title.css";

const Title = props => (
	<div>
		<div className="banner jumbotron jumbotron-fluid">
			<h1 className={`win ${props.winMessageClass}`}>{props.winMessage}</h1>	
		</div >
	</div>
)

export default Title;