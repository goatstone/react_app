/* goatstone/App.js : Jose Collas : 7.2015    */ 
var React = require('react');
var Radium = require('radium');
var Spinner = require('./ui/Spinner');
var Bouncer = require('./ui/Bouncer');
var OverflowIcon = require('./ui/OverflowIcon');
var Menu = require('./ui/Menu');
var Message = require('./ui/Message');
var PlayControl = require('./ui/PlayControl');
var Glower = require('./ui/Glower');
var Clouder = require('./ui/Clouder');
var PB = require('./pubsub/PubSub');
var App = React.createClass({
	getDefaultProps: function () {		
    	return { 
    		style: {
    			position:'absolute', 
    			height:'100%', 
    			width: '100%', 
    			background:'red', 
    	        backgroundImage: 'linear-gradient(rgba(100, 255, 205, 1.0), rgba(100, 100, 255, 1.0) )'
    	    } };
	},
	render: function() {
		return (
			<div style={this.props.style}> 
 				<Menu pb={PB} />
 				<Clouder pb={PB} x={60} y={150}   /> 				
 				<Clouder pb={PB} x={30} y={180} /> 				
 				<Bouncer pb={PB} />
 				<OverflowIcon pb={PB}/>
 				<Message pb={PB} />
 				<Glower pb={PB} />
				<Spinner pb={PB} />			
 			</div>
		);
	}	
});
module.exports = App;
