// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Utworzenie komponentu React

const App = () => {
	const buttonText = 'Zapisz';
	const labelText = 'Podaj imię: ';
	return (
		<div>
			<label className="label" htmlFor="name">
				{labelText}
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
		</div>
	);
};
//Wyświetlenie komponentu na ekranie

ReactDOM.render(<App />, document.querySelector('#root'));
