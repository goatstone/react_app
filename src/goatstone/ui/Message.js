/* goatstone/ui/Message.js Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var style;
var Message = React.createClass({
  handleClick: function(){
  },
  componentDidMount: function(){
    this.props.pb.subscribe('message.show', function(a){
      if(style.opacity === '0'){
        style.opacity = '1.0';
      }else{
        style.opacity = '0';
      }
      this.forceUpdate();
    }.bind(this));
  },  
  render: function () {
    return (
      <div style={style} onClick={this.handleClick} tabIndex="200">
        <h2 style={{marginTop:0, marginBottom:0}}>React Radium Examples</h2> 
        <i style={{color:'orange', marginLeft:10 }}>Goatstone : 2015</i>
      </div>
    );
  }
});
Message = Radium(Message);
style = {
  	position:'absolute',
    bottom: 15,
    right: 15,
    height: 70,
    width: 350, 
    padding: 4,
    backgroundColor:'rgba(0, 0, 50, 0.5)',
    borderRadius: 12,
    fontFamily:'sans-serif',
    color:'rgba(255, 255, 0, 0.7)',
    opacity: '1.0',
    transition: 'opacity 2s',
    boxShadow:'gray 10px 10px 10px'
};
module.exports = Message;