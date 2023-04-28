import React from "react";
import "./App.css";
import Product from "./Components/Product";

function App() {
	return (
		<div className='App'>
			<h1>Workshop React Props</h1>
			<h2>Product List</h2>
			<div className='cards'>
				<Product name='Coffe' discp='This is my coffe'>
					<img
						src='https://images.unsplash.com/photo-1679497558048-13770221fc9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
						alt='coffe'
					/>
				</Product>
				<Product name='Cake' discp='This is my cake'>
					<img
						src='https://images.unsplash.com/photo-1677523875054-a615d799d9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
						alt='cake'
					/>
				</Product>
				<Product name='Salade' discp='This is my salade'>
					<img
						src='https://images.unsplash.com/photo-1677414283621-861e7897c317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwN3x4alBSNGhsa0JHQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
						alt='coffe'
					/>
				</Product>
			</div>
		</div>
	);
}

export default App;
