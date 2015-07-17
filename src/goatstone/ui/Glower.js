/* goatstone/ui/Glower.js Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var animStates = ['0', 'infinite'];
var animState = animStates[0];
var rotatePKF;
var style;
var cStyle;
var Glower = React.createClass({
  componentDidMount: function(){
      this.props.pb.subscribe('play', function(a){
        animState = (animState === '0')? 'infinite': '0';
        style.animation = 
        rotatePKF + ' 4s ease-in 0s '  + animState  + ' alternate none',
        this.forceUpdate();
    }.bind(this));
  }, 
  render: function () {
    return (
      <div style={style}>
      <svg>
      	<circle style={cStyle} cx="50" cy="50" r="49" />
      </svg>
      </div>
    );
  }
});
Glower = Radium(Glower);
// pulse key frames
rotatePKF = Radium.keyframes({
  '0%': {
    transform: 'scale(1)',
    backgroundColor: 'rgba(255, 20, 0, 0.5)' 
  }, 
  '100%': {
     transform: 'scale(1.1)',
     backgroundColor: 'rgba(200, 255, 25, 0.9)' 
  } 
}); 
cStyle = {
	fill:'rgba(250, 100, 0, 0.1)'  
}
style = {
  	position:'absolute',
    textAlign:'center',
    top: '20%',
    left: '25%',
    background: 'rgba(100,100,255, 0.5)',
    borderRadius: '50px',
    height: '100px',
    width: '100px',
    fontSize: '17px',
    animation: rotatePKF + ' 2s ease-in 0s infinite alternate none',
    boxShadow: '19px 16px 27px rgba(20, 110, 200, 0.5)',
    color: 'orange',
    zIndex: '100'
};
module.exports = Glower;
