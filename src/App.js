import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<lable htmlFor="bar">bar</lable>
				<input type="text" onClick={() => {console.log("I am clicked")}}/>
			</React.Fragment>
		)
	}	
}


// function App() {
// 	return (
// 		<React.Fragment>
// 			<lable htmlFor="bar">bar</lable>
// 			<input type="text" onClick={() => {console.log("I am clicked")}}/>
// 		</React.Fragment>
// 	)
// }

export default App;
