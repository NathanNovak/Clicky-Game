import React from 'react';
import "./HostCard.css";

const HostCard = props => {
	// console.log("HOSTS", props)
	return (
		<div
			className={`card ${props.incorrectMessageClass}`}
			value={props.id}
			onClick={() => props.handleClick(props.id)}>	
			<div className={`img-container ${props.incorrectMessageClass}`}>
				<img alt={props.name} src={props.image}/>
			</div>
		</div>	
	)
}
export default HostCard;