import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

const Product = (props) => {
	const handleName = (name) => alert(`This is a ${props.name}`);
	return (
		<div>
			<div className='cards'>
				<Card style={{ width: "18rem" }}>
					{props.children}
					<Card.Body>
						<Card.Title>{props.name}</Card.Title>
						<Card.Text>{props.discp}</Card.Text>
						<Card.Text>{props.price}</Card.Text>
						<Button variant='primary' onClick={handleName}>
							Go somewhere
						</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Product;
