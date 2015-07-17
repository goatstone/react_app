/* goatstone/App.js : Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var Spinner = require('./ui/Spinner.js');
var Bouncer = require('./ui/Bouncer.js');
var OverflowIcon = require('./ui/OverflowIcon.js');
var Menu = require('./ui/Menu.js');
var Message = require('./ui/Message.js');
var PlayControl = require('./ui/PlayControl.js');
var Glower = require('./ui/Glower.js');
var Clouder = require('./ui/Clouder.js');
var PB = require('./pubsub/PubSub.js');
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
 				<Clouder pb={PB} x={60} y={5}   /> 				
 				<Clouder pb={PB} x={30} y={130} /> 				
 				<Bouncer pb={PB} />
 				<OverflowIcon pb={PB}/>
 				<Menu pb={PB} />
 				<Message pb={PB} />
 				<PlayControl pb={PB} />
 				<Glower pb={PB} />
				<Spinner pb={PB} />			
 			</div>
		);
	}	
});
module.exports = App;
