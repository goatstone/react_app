/* Spinner.js Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium'); 
var animStates = ['1', 'infinite'];
var animState = animStates[0];
var rotatePKF;
var spinnerStyles;
var Spinner = React.createClass({
    componentDidMount: function(){
      this.props.pb.subscribe('play', function(a){
        animState = (animState === '1')? 'infinite': '1';
        console.log('play  ', animState);
        spinnerStyles.inner.animation = 
        rotatePKF + ' 2s linear 0s '  + animState  + ' alternate both';
        this.forceUpdate();
    }.bind(this));
  }, 
  render: function () {
    return (
      <div style={spinnerStyles.inner}>{String.fromCharCode(8634)}  </div>
    );
  }
});
Spinner = Radium(Spinner);
rotatePKF = Radium.keyframes({
  '0%': {
    transform: 'rotateY(0deg)' 
  },
  '100%': {
    transform: 'rotateY(360deg)' 
  }
}); 
spinnerStyles = {
  inner: {
    position:'absolute',
    textAlign:'center',
    top: '40%',
    left: '40%',
    background: 'rgba(100,100,255, 0.9)',
    borderRadius: '50px',
    height: '100px',
    width: '100px',
    fontSize: '112px',
    animation: rotatePKF + ' 5s linear 0s infinite alternate both', 
    boxShadow: '19px 16px 27px rgba(20, 110, 200, 0.5)',
    color: 'orange',
    padding: '32px 10px 20px 10px',
    zIndex: 1000 
  }
};
module.exports = Spinner;