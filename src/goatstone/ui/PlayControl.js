/* goatstone/ui/PlayConrol.js */
var React = require('react');
var Radium = require('radium');
var bStyle;
var style;
var bLabel = String.fromCharCode(5172);
var PlayControl = React.createClass({
  handleClick: function(){
  	bLabel = (bLabel === String.fromCharCode(5172) )?
    	String.fromCharCode(8865) : String.fromCharCode(5172) ;
  	this.props.pb.publish('play');
    this.forceUpdate();
  },
  componentDidMount: function(){
    this.props.pb.subscribe('PlayControl.show', function(a){
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
      <div style={style}>       
    	 <button style={bStyle} onClick={this.handleClick}>  
			   {bLabel}   
		    </button>
      </div>
    );
  }
});
PlayControl = Radium(PlayControl);
bStyle = {
    fontSize: 25,
    //margin: '10px 10px 20px 10px',	
    borderRadius: 6
}
style = {
  	position:'absolute',
  	textAlign:'center',
    bottom: 15,
    left: 15,
    minWidth:55,
    padding: 20,
    backgroundColor:'rgba(0, 0, 50, 0.5)',
    borderRadius: 12,
    color:'rgba(255, 255, 0, 0.7)',
    opacity: '1.0',
    transition: 'opacity 2s',
    boxShadow:'gray 10px 10px 10px'
};
module.exports = PlayControl;