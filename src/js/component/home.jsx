import React from "react";
import ReactDOM from "react";

class Square extends React.Component {
	constructor (props) {
	  super(props);
	  this.state = {
		value: null,
	  }
	}
	render() {
	  return (
		<button 
		  className="square" 
			onClick={() =>this.setState({value: 'X'}) }>
		  {this.state.value}
		</button>
	  );
	}
  }
  
  class Board extends React.Component {
	constructor (props);
	super(props);
	this.state = {
	  squares: Array(9).fill(null),;
	}
	renderSquare(i) {
	  return <Square value={i} />;
	}
  
	render() {
	  const status = 'Next player: X';
  
	  return (
		<div>
		  <div className="status">{status}</div>
		  <div className="board-row">
			{this.renderSquare(0)}
			{this.renderSquare(1)}
			{this.renderSquare(2)}
		  </div>
		  <div className="board-row">
			{this.renderSquare(3)}
			{this.renderSquare(4)}
			{this.renderSquare(5)}
		  </div>
		  <div className="board-row">
			{this.renderSquare(6)}
			{this.renderSquare(7)}
			{this.renderSquare(8)}
		  </div>
		</div>
	  );
	}
  }
  
  class Game extends React.Component {
	render() {
	  return (
		<div className="game">
		  <div className="game-board">
			<Board />
		  </div>
		  <div className="game-info">
			<div>{/* status */}</div>
			<ol>{/* TODO */}</ol>
		  </div>
		</div>
	  );
	}
  }
  
  // ========================================
  
  ReactDOM.render(
	<Game />,
	document.getElementById('root')
  );
  



//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
