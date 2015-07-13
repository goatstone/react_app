/** @jsx React.DOM */
var React = require('react');
var Radium = require('radium');
var Spinner = require('./ui/Spinner.js');
var Bouncer = require('./ui/Bouncer.js');

var App = React.createClass({
	render: function() {
		return (
			<div>  
				<h2>React Radium</h2>
				<Spinner />			
 				<Bouncer />
 			</div>
		);
	}	
});
module.exports = App;
