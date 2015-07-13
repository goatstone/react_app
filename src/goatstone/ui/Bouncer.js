/* goatstone/ui/Bouncer.js : Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var Bouncer = React.createClass({
  render: function () {
    return (
      <div style={spinnerStyles.inner}>{String.fromCharCode(2000)}</div>
    );
  }
});
Bouncer = Radium(Bouncer);
// pulse key frames
var rotatePKF = Radium.keyframes({
  '0%': {
    top:'0%',
    transform: 'scale(1)',
    backgroundColor: 'rgba(10, 200, 255, 0.4)' 
  }, 
  '100%': {
     top:'80%',
     transform: 'scale(2)',
     backgroundColor: 'rgba(10, 200, 255, 0.9)' 
  } 
}); 
var spinnerStyles = {
  inner: {
  	position:'absolute',
    textAlign:'center',
    top: '0%',
    left: '9%',
    background: 'rgba(100,100,255, 0.5)',
    borderRadius: '50px',
    height: '10px',
    width: '10px',
    fontSize: '17px',
    animation: rotatePKF + ' 4s ease-in 0s infinite alternate none',
    boxShadow: '19px 16px 27px rgba(20, 110, 200, 0.5)',
    color: 'orange',
    padding: '32px 10px 20px 10px', 
    zIndex: '100'
  }
};
module.exports = Bouncer;
