/* goatstone/ui/Clouder.js : Jose Collas 7.2015 */
var React = require('react');
var Radium = require('radium');
var Clouder = React.createClass({
	getDefaultProps: function () {		
    	return { 
    		style:  {top:33 },
	 		cStyle : {
				fill:'rgba(50, 100, 255, 0.5)' 
			} 
		};
	},
  componentDidMount: function(){
	var x = this.props.x;
	var rotatePKF = Radium.keyframes({
	  '0%': {
	    left:  x + '%',
	    transform: 'scale(1)'
	  }, 
	  '100%': {
	     left:'100%',
	     transform: 'scale(1.3)'
	  } 
	}); 
	var style = {
	  	position: 'absolute',
	    textAlign: 'center',
	    width: 140,
	    height: 120,
	    backgroundColor: 'transparent',
	    top: '9%',
	    left: '60%',
	    animation: rotatePKF + ' 30s ease-in 0s infinite alternate none',
	    zIndex: '100'
	};
	this.props.style = style;
   	this.forceUpdate(); 
  }, 
  render: function () {
    return (
      <div style={this.props.style}>  
	      <svg>
	      	<circle style={this.props.cStyle} cx="50" cy="50" r="20" />
	      	<circle style={this.props.cStyle} cx="80" cy="50" r="50" />
	      	<circle style={this.props.cStyle} cx="90" cy="50" r="40" />
	      	<circle style={this.props.cStyle} cx="40" cy="50" r="40" />
	      	<circle style={this.props.cStyle} cx="70" cy="50" r="40" />
	      	<circle style={this.props.cStyle} cx="70" cy="30" r="20" />
	      	<circle style={this.props.cStyle} cx="30" cy="50" r="20" />
	      </svg>
      </div>
    );
  }
});
Clouder = Radium(Clouder);
module.exports = Clouder;
