import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const OurTeam = ['MUKHLIS', 'IAN', 'ELAN', 'IKHWAN', 'LINA', 'ANDY', 'MARCO', 'DINA'] 
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>Edit <code>src/App.js</code> and save to reload.</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
				{
					OurTeam.map(x=><b>{x}</b>)
				}
			</header>
		</div>
	);
}

export default App;