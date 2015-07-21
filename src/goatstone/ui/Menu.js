/* goatstone/ui/Menu.js Jose Collas : 7.2015 */
var React = require('react');
var Radium = require('radium');
var style = {
    position:'absolute',
    opacity: '0',
    top: 40,
    right: 50,
    boxShadow:'gray 20px 20px 20px',
    width: 100,
    backgroundColor:'rgba(0, 100 , 200, 0.9)',
    borderRadius:12,
    fontFamily:'sans-serif', 
    transition: 'opacity 1s' 
};
var linkStyle = {
  cursor:'pointer',
  listStyleType: 'none',
  margin:'15px',
}
var Menu = React.createClass({
  handleClick: function(){
    this.props.pb.publish('message.show');
    linkStyle.backgroundColor = (linkStyle.backgroundColor === 'aqua')? 'orange':'aqua' ;
    this.forceUpdate();
  },
  onF: function(){
    style.boxShadow = 'blue 10px 10px 20px';
    linkStyle.color = 'red';
    this.forceUpdate();    
  },
  onB: function(){
    style.boxShadow = 'gray 10px 10px 20px';
    linkStyle.color = 'blue';
    this.forceUpdate();    
  },
  componentDidMount: function(){
    this.props.menushow = false;
    this.props.pb.subscribe('menu.show', function(a){
      if(style.opacity === '0'){
        style.opacity = '1.0';
      }else{
        style.opacity = '0';
      }
      this.forceUpdate();
    }.bind(this));
  },
  render: function () {
    var viewBox = [0, 0, 350, 310].join(' ');
    return (
      <div style={style}>
       <button       
       onClick={this.handleClick}  
       onFocus={this.onF} 
       onBlur={this.onB}
       style={linkStyle} tapIndex="3"> 
       About 
       </button> 

      </div>
    );
  }
});
Menu = Radium(Menu);
module.exports = Menu;