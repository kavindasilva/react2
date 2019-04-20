

import React, { Component } from 'react';
//import ReactDOM from 'react-dom';


	//return <h2>Hello Counter</h2> ;
	/*
	return (
		<div>
			<h2>Counter</h2>
			<button>Increment</button>
		</div>
	);*/


class Counter extends Component {
	state = {}

	render() {
		//return <h2>Hello Counter</h2> ;

		return (
			<React.Fragment>
				<h2>Counter</h2>
				<button>Increment</button>
			</React.Fragment>
		) ;

	}
}

//export class Counter;
export default Counter;
