/* goatstone/ui/OverflowIcon.js Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var style;
var svgStyle;
var OverflowIcon = React.createClass({
  getInitialState: function() { return {s:2} },
  handleClick: function(){
    this.props.pb.publish('menu.show');
  },
  onF: function(){
    svgStyle.boxShadow = 'blue 10px 10px 20px';
    this.forceUpdate();    
  },
  onB: function(){
    svgStyle.boxShadow = 'gray 10px 10px 20px';
    this.forceUpdate();    
  },
  render: function () {
    var viewBox = [0, 0, 350, 310].join(' ');
    return (
      <div style={style} onClick={this.handleClick} tabIndex="1" 
      onFocus={this.onF} onBlur={this.onB}>
        <svg style={svgStyle} viewBox={viewBox}>
          <title>xx</title>
          <line x1="50" x2="300" y1="70" y2="70"/>
          <line x1="50" x2="300" y1="150" y2="150"/>
          <line x1="50" x2="300" y1="230" y2="230" />
        </svg>
      </div>
    );
  }
});
OverflowIcon = Radium(OverflowIcon);
svgStyle = {
  stroke: 'blue',
  strokeWidth: 55,
  backgroundColor:'rgba(255, 255, 200, 0.5)',
  color: 'blue', 
  strokeLinecap:'round',
  borderRadius: '5px', 
  boxShadow:'gray 10px 10px 20px',
  cursor:'pointer'
}
style = {
  	position:'absolute',
    top: '10px',
    right: '10px',
    height: '50px',
    width: '50px' 
};
module.exports = OverflowIcon;