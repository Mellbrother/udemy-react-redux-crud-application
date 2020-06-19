import React from 'react';

function App() {
	return (
		<React.Fragment>
			<lable htmlFor="bar">bar</lable>
			<input type="text" onClick={() => {console.log("I am clicked")}}/>
		</React.Fragment>
	)
}

export default App;
