/* goatstone/App.js : Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var Spinner = require('./ui/Spinner.js');
var Bouncer = require('./ui/Bouncer.js');
var OverflowIcon = require('./ui/OverflowIcon.js');
var Menu = require('./ui/Menu.js');
var Message = require('./ui/Message.js');
var PB = require('./pubsub/PubSub.js');
var App = React.createClass({
	getDefaultProps: function () {
    	return { a: "Hello" };
	},
	render: function() {
		return (
			<div> 
				<Spinner pb={PB} />			
 				<Bouncer pb={PB} />
 				<OverflowIcon pb={PB}/>
 				<Menu pb={PB} />
 				<Message pb={PB} />
 			</div>
		);
	}	
});
module.exports = App;
